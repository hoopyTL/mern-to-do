export const getAllTasks = (req, res) => {
  res.status(200).json({ message: "Bạn có 20 việc cần làm" });
};

export const createTask = (req, res) => {
  res.status(201).json({ message: "Thêm việc cần làm thành công" });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Cập nhật việc cần làm thành công" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Xóa việc cần làm thành công" });
};
