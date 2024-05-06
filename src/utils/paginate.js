export default function paginate(items, currentPage, pageSize){
  return [...items].splice((currentPage-1)*pageSize, pageSize);
}