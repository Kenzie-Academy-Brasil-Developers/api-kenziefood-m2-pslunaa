class KenzieFood {

    static urlApi = "https://kenzie-food-api.herokuapp.com/product"

    static async get() {
        let response = await fetch(this.urlApi, { headers :{Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjQzMDQ0MzQwLCJleHAiOjE2NDM5MDgzNDAsInN1YiI6IltvYmplY3QgVW5kZWZpbmVkXSJ9.9Sy4pQbIFQz92SjiMy2MY4IxTgoWC943u8fKdLXcBkE"}} )
        let data = await response.json()
        return data
    }

}

KenzieFood.get().then(data=>{
    console.log(data)
})

module.exports = KenzieFood

