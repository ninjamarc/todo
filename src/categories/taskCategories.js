

const KEYS ={
    categories:'categories',
    categoryId: 'categoryId'
}

export const getTaskCategories = () => ([
    {id:'1', title:'Personal'},
    {id:'2', title:'Business'},
    {id:'3', title:'Other'},
])

export function insertCategory(data) {
    let categories = getAllcategories();
    data['id'] = genertateCategoryId()
    categories.push(data)
    localStorage.setItem(KEYS.categories, JSON.stringify(categories))
}

export function genertateCategoryId() {
    if (localStorage.getItem(KEYS.categoryId) == null)
        localStorage.setItem(KEYS.categoryId, '0')
    var id = parseInt(localStorage.getItem(KEYS.categoryId))
    localStorage.setItem(KEYS.categoryId, (++id).toString())
    return id;
}

export function getAllcategories() {
    if (localStorage.getItem(KEYS.categories) == null)
        localStorage.setItem(KEYS.categories, JSON.stringify([]))
        let categories = JSON.parse(localStorage.getItem(KEYS.categories));
        // map categoryID to category title
        let tasks = getTaskCategories();
        return categories.map(x => ({
            ...x,
            tasks: tasks[x.taskId - 1].title
        }))
}