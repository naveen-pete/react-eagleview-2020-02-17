export const categoryAll = {
  id: 'all',
  name: 'All'
};

export const apiBaseUrl = 'http://localhost:3001';

export class CategoryActionTypes {
  static SELECT_CATEGORY = 'SELECT_CATEGORY';

  static GET_CATEGORIES = 'GET_CATEGORIES';
  static SET_CATEGORIES = 'SET_CATEGORIES';
}

export class PostActionTypes {
  static GET_POSTS = 'GET_POSTS';
  static SET_POSTS = 'SET_POSTS';

  static CREATE_POST = 'CREATE_POST';
  static SET_CREATED_POST = 'SET_CREATED_POST';

  static DELETE_POST = 'DELETE_POST';
  static REMOVE_DELETED_POST = 'REMOVE_DELETED_POST';
}