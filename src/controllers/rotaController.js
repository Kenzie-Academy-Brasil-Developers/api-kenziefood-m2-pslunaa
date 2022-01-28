class RotaProduct{
    static urlAPI = "https://kenzie-food-api.herokuapp.com/"

    static async post(data){
        const response = await fetch(`${this.urlAPI}my/product`, {
            method: "POST",
            headers: {
                "Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjQzMDQ0MzQwLCJleHAiOjE2NDM5MDgzNDAsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.9Sy4pQbIFQz92SjiMy2MY4IxTgoWC943u8fKdLXcBkE", 
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response
    }

    static async delete(productId){
        const response = await fetch(`${this.urlAPI}my/product/${productId.id}`, {
            method: "DELETE",
            headers:{
                "Authorization": "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjQzMDQ0MzQwLCJleHAiOjE2NDM5MDgzNDAsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.9Sy4pQbIFQz92SjiMy2MY4IxTgoWC943u8fKdLXcBkE",
                "Content-type": "application/json"
            }
        })
    }
}

export{RotaProduct};