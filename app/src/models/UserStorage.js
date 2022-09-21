"use strict"

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
}

module.exports = UserStorage;