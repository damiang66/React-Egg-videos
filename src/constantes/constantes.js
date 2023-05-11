export const API={
    URL:"https://rickandmortyapi.com/api",
    PERSONAJES: function (){
        return `${this.URL}/character`
    },
    PERSONAJES_ID: function(id){
        return `${this.URL}/character/${id}`
    }

    }
