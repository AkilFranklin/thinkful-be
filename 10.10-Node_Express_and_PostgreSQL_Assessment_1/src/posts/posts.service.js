const knex = require("../db/connection");
const table = "posts";

function create(post) {
  //your solution here
  return knex(table)
  .insert(post)
  .returning("*")
  .then((createdRecords) => createdRecords[0])
}

function read(postId) {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

async function update(updatedPost) {
  //your solution here
  return knex(table)
    .select("*")
    .where({ post_id: updatedPost.post_id })
    .update(updatedPost, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(post_id) {
  //your solution here
  return knex(table).where({ post_id }).del();
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
