

<template>
    <div class="repo-page">
        <h1>Welcome to the Git Repository Storage Box!</h1>

        <p>Manage your Repository on the go! This section contains all of your project's files and each file's revision
            history!</p>

        <div>
        <h1>Search</h1>
        <!-- <form class="d-flex mx-auto" role="search">
                <input class="form-control me-1 w-25 m-auto" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
        </div>


        <div v-if="isLoading">
            <h1>Loading...</h1>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div v-else class="ret-items ">
            <div v-for="repo in paginatedArray" :key="repo.id">
                <div class="card card2 d-flex justify-content-center mx-auto pt-5 mt-5 bg-dark" style="width: 30rem;">
                    <div class="card-body cardbody2">
                        <h1 class="card-title text-white">Repo Name:</h1>
                        <p class="card-text text-light">{{ repo.name }}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item mt-5"><span>Visibility: </span>{{ repo.visibility }}</li>
                            <li class="list-group-item mt-2">Copy Url: {{ repo.clone_url }}</li>
                            <li class="list-group-item mt-2">Date Created: {{ repo.created_at }}</li>
                            <li class="list-group-item mt-2">Last Commit: {{ repo.updated_at }}</li>

                        </ul>
                        <RouterLink to="/{{repo.}}" href="#" class="btn btn-primary mt-4">Visit Repo</RouterLink>
                    </div>
                </div>

            </div>

            <div aria-label="Page navigation example"  class="mx-auto">
                <ul class="pagination mt-4">
                    <li class="page-item"><button @click="prevPage" :disabled="currPage == 1">Previous</button></li>
                    <h1 class="text-dark">{{ currPage }} of {{ pages }}</h1>

                    <li class="page-item"><button @click="nextPage" :disabled="currPage == pages">Next</button></li>
                </ul>
            </div>
        </div>

    </div>
</template>


<style>
.repo-page {
    width: 100%;


}

.repo-page h1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
}

.repo-page p {
    margin-top: 30px;
    font-size: 20px;
    text-align: center;
}

.ret-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}

.ret-items h2 {
    font-size: 12px;
}

.pagination {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.pagination button {
    padding: 1em;
    background-color: rgb(33, 37, 30);
    border: none;
    color: white;
    border-radius: 5px;
}

.card2{
    width: 100%;
}
.cardbody2 h1,
p {

}
</style>


<script>

export default {

    data() {
        return {
            repos: [],
            isLoading: true,
            pageSize: 5,
            currPage: 1

        }

    },
    computed: {
        pages: function () {
            return Math.ceil(this.repos.length / this.pageSize)

        },

        paginatedArray() {
            const start = (this.currPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.repos.slice(start, end)

        }
    },
    mounted() {
        this.fetchRepo();
    },
    updated() {
        console.log(this.paginatedArray);
    },
    methods: {
        fetchRepo() {
            fetch('https://api.github.com/users/ceceukoha/repos')
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    this.repos = data
                    this.isLoading = false
                    console.log(data)
                })
        },
        prevPage(){
            this.currPage -- //decrement reduces value by 1
        },
        nextPage(){
            this.currPage ++
        }

    }

}
</script>