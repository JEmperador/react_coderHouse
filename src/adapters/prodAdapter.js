export const adapter = (doc) => {
    const data = doc.data()

    const prodAdapted = {
        id: doc.id,
        category: data.category,
        name: data.name,
        img: data.img,
        description: data.description,
        price: data.price,
        order: data.order,
    }

    return prodAdapted;
}