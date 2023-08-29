import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addcomment,
  fecthCommentByRoomId,
} from "../../redux/features/slice/commentSlice";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import Rating from "react-rating-stars-component";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Comment = (props) => {
  const dispatch = useDispatch();
  const { commentState, isLoading } = useSelector((state) => state.comment);
  const { userInfo } = useSelector((state) => state.authem);
  const roomId = props?.id;

  const schema = yup.object().shape({
    guestName: yup.string().required("Guest Name is required"),
    contact: yup.string().required("Contact is required"),
    feedback: yup.string().required("Feedback is required"),
  });

  const methods = useForm({
    defaultValues: {
      guestName: userInfo?.userName || "", // Set giá trị mặc định từ userInfo hoặc rỗng
      contact: userInfo?.email || "", // Set giá trị mặc định từ userInfo hoặc rỗng
      feedback: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    dispatch(fecthCommentByRoomId(roomId));
  }, [dispatch, roomId]);

  const [rating, setRating] = useState(0);

  const onSubmit = (formState) => {
    const newComment = {
      GuestName: formState.guestName,
      contact: formState.contact,
      feedback: formState.feedback,
      starRating: rating,
      roomId: roomId,
    };
    dispatch(addcomment(newComment));
    reset();
    setRating(0);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {isLoading ? (
        <Spin />
      ) : (
        <div>
          {commentState.length !== 0 && commentState !== undefined ? (
            <div>
              {commentState.map((item) => (
                <div key={item.id}>
                  {" "}
                  {/* Thêm key cho mỗi phần tử */}
                  <div className="comment_name">
                    <h3>{item?.GuestName}</h3>
                  </div>
                  <div className="comment_rating">
                    <Rating
                      value={item?.starRating}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="comment_content">
                    <p>{item?.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p>No Comment in here...</p>
            </div>
          )}
        </div>
      )}

      <div className="comment_form">
        <div className="roomDetail__title">
          <h2>Add Feedback</h2>
        </div>
        <Rating
          count={5}
          onChange={handleRatingChange}
          size={24}
          activeColor="#ffd700"
        />
        {rating === 0 && <p>Please rate the room</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Guest Name</label>
            <Controller
              name="guestName"
              control={control}
              render={({ field }) => (
                <Input
                  value={
                    userInfo && !methods.getValues("guestName")
                      ? userInfo.userName
                      : field.value
                  }
                  {...field}
                />
              )}
            />
            <p>{errors.guestName?.message}</p>
          </div>
          <div>
            <label>Contact</label>
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Input
                  value={
                    userInfo && !methods.getValues("contact")
                      ? userInfo.email
                      : field.value
                  }
                  {...field}
                />
              )}
            />
            <p>{errors.contact?.message}</p>
          </div>
          <div>
            <label>Feedback</label>
            <Controller
              name="feedback"
              control={control}
              render={({ field }) => <TextArea {...field} />}
            />
            <p>{errors.feedback?.message}</p>
          </div>
          <input type="submit" className="submitBtn" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Comment;
