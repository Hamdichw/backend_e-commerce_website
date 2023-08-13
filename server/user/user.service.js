const db = require("../database-mysql/index");
const addUserService = async (userData) => {
  return new Promise(async (resolve, reject) => {
    const query = "INSERT INTO users (userName,password,email,firstName,lastName,age,photoUrl,createdAt) VALUES (?)";
    const values = [
      userData.userName,
      userData.password,
      userData.email,
      userData.firstName,
      userData.lastName,
      userData.age,
      userData.photoUrl,
      userData.createdAt ? userData.createdAt : new Date().toLocaleString()
    ];
    db.query(query, [values], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.affectedRows === 0) {
          resolve(null);
        } else {
          resolve(results);
        }
      }
    });
  });
};
const updateUserService = async (idUser,fieldsToUpdate) => {
  return new Promise(async (resolve, reject) => {
    const query = "UPDATE users SET ? WHERE idUser = ?";
    db.query(query, [fieldsToUpdate, idUser], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.changedRows === 0) {
          resolve(null);
        } else {
          resolve(results);
        }
      }
    });
  });
};
const getUserByIdService = async (id) => {
  return new Promise(async (resolve, reject) => {
    const query = "SELECT * FROM users WHERE id = ?";
    db.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length === 0) {
          resolve(null);
        } else {
          resolve([results]);
        }
      }
    });
  });
};
const getUserByEmailAndPasswordService = async (email) => {
  return new Promise(async (resolve, reject) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length === 0) {
          resolve(null);
        } else {
          resolve(results);
        }
      }
    });
  });
};
const getAllUserService = async () => {
  return new Promise(async (resolve, reject) => {
    const query = "SELECT * FROM users";
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length === 0) {
          resolve(null);
        } else {
          resolve([results]);
        }
      }
    });
  });
};
const deleteUserByIdService = async (id) => {
  return new Promise(async (resolve, reject) => {
    const query = "DELETE users WHERE id = ?";
    db.query(query, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        if (result.changedRows === 0) {
          resolve(null);
        } else {
          resolve(result);
        }
      }
    });
  });
};

module.exports = {
  addUserService,
  updateUserService,
  getUserByIdService,
  getAllUserService,
  deleteUserByIdService,
  getUserByEmailAndPasswordService

};
