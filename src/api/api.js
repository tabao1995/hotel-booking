import axios from "axios";

const API_URL = "http://localhost:4000/";

export const RoomApi = {
  getRoomsInfo: async () => {
    try {
      const response = await axios.get(API_URL + "rooms");
      return response.data;
    } catch (error) {
      // Xử lý lỗi khi gọi API getRoomsInfo thất bại
      console.error("Lỗi khi gọi API getRoomsInfo:", error);
      throw error; // Ném lỗi để thông báo lên tầng gọi hàm
    }
  },

  getRoomInfoByName: async (id) => {
    try {
      const response = await axios.get(
        API_URL + "rooms/?name=" + encodeURIComponent(id)
      );
      return response.data;
    } catch (error) {
      // Xử lý lỗi khi gọi API getRoomInfoByName thất bại
      console.error("Lỗi khi gọi API getRoomInfoByName:", error);
      throw error; // Ném lỗi để thông báo lên tầng gọi hàm
    }
  },
};
export const pageApi = {
  getPageInfoBytitle: async (title) => {
    try {
      const response = await axios.get(
        API_URL + "page?title=" + encodeURIComponent(title)
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export const BookingApi = {
  getBooking: async () => {
    try {
      const response = await axios.get(API_URL + "booking/");
      return response.data;
    } catch {
      console.log("a");
    }
  },
  addNewBooking: async (data) => {
    return await axios.post(API_URL + "booking", data);
  },
  updateBooking: async (confirmCode) => {
    try {
      const response = await axios.get(
        API_URL + "booking?confirmCode=" + encodeURIComponent(confirmCode)
      );
      const newdata = response.data[0];
      newdata.isConfirm = true;
      const roomId = newdata?.id;
      axios.patch(API_URL + "booking/" + roomId, { isConfirm: true });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
  deleteBooking: async (confirmCode) => {
    try {
      const response = await axios.get(
        API_URL + "booking?confirmCode=" + encodeURIComponent(confirmCode)
      );
      const id = response.data[0]?.id;
      axios.delete(API_URL + "booking/" + id);
    } catch {}
  },
};
export const CommentApi = {
  getCommentByRoomID: async (id) => {
    const response = await axios.get(
      API_URL + "comment?roomId=" + encodeURIComponent(id)
    );
    return response.data;
  },
  addComment: async (data) => {
    return await axios.post(API_URL + "comment", data);
  },
};
export const AuthemApi = {
  Authem: async (userName, password) => {
    try {
      const response = await axios.get(API_URL + "user", {
        params: {
          userName: encodeURIComponent(userName),
          pwd: encodeURIComponent(password),
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  Register: async (data) => {
    try {
      const response = await axios.get(
        API_URL + "user?userName=" + data.userName
      );
      if (response.data.length === 0) {
        await axios.post(API_URL + "user", data);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  },
  getUserInfoByUserName: async (userID) => {
    const response = await axios.get(
      API_URL + "user?userName=" + encodeURIComponent(userID)
    );
    return response.data;
  },
  activeUser: async (pwd) => {
    try {
      const response = await axios.get(
        API_URL + "user?pwd=" + encodeURIComponent(pwd)
      );
      const newdata = response.data[0];
      newdata.isConfirm = true;
      const userID = newdata?.id;
      axios.patch(API_URL + "user/" + userID, { isConfirm: true });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
};
