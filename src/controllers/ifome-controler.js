class KenzieFood {

    static urlApi = "https://kenzie-food-api.herokuapp.com/"

    static async getPublic() {
        let response = await fetch(`${this.urlApi}product`)
        let data = await response.json()
        return data
    }

    static async getPrivate() {
        let response = await fetch(`${this.urlApi}my/product`, { headers :{Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjQzMDQ0MzQwLCJleHAiOjE2NDM5MDgzNDAsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.9Sy4pQbIFQz92SjiMy2MY4IxTgoWC943u8fKdLXcBkE"}} )
        let data = await response.json()
        return data
    }

}


export{KenzieFood};

