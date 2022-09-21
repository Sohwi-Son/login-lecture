"use strict";

class UserStorage {
    static #users = {
        id: ["손소휘" , "서필립"],
        psword: ["1234" , "1234"],
        name: ["공쥬님" , "서아서필립"],
      };

      static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
          if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field]
          }
          return newUsers;
         }, {});
        return newUsers;
      }

      static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf();
        const usersKeys = Object.keys(users); // =. [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {});

        return userInfo;
      }

      static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.paword.push(userInfo.paword);
        return {success: true};
      }
}

module.exports = UserStorage;