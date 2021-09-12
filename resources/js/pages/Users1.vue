<template>
    <div class="container">

        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users Table</h3>

                        <div class="card-tools">
                            <!-- Button trigger modal -->
                            <button class="btn btn-success" data-toggle="modal"
                                    data-target="#exampleModal">Add New
                                <i class="fas fa-user-plus fa-fw"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Registered At</th>
                                <th>Modify</th>
                            </tr>

                            <tr v-for="user in users.data" :key="user.id">
                                <td>{{user.id}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.type | upText}}</td>
                                <td>{{user.created_at}}</td>

                                <td>
                                    <!--<a href="#">-->
                                    <a href="#" @click="editModal(user)">
                                        <i class="fa fa-edit blue"></i>&nbsp;&nbsp;
                                    </a>
                                    <a href="#" @click="deleteUser(user.id)">&nbsp;
                                    <!--<a href="#">-->
                                        <i class="fa fa-trash red"></i>
                                    </a>

                                </td>
                            </tr>

                            </tbody>
                        </table>

                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <!--<pagination :data="users" @pagination-change-page="getResults">
                        </pagination>-->
                     </div>
                </div>
                <!-- /.card -->
            </div>
        </div>  <!-- end class="row mt-5" -->

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createUser">  <!--  form Action -->
                        <div class="modal-body">
                            <div class="form-group">
                                 <input v-model="form.name" type="text" name="name"
                                    placeholder="Name"
                                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email"
                                       placeholder="Email Address"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                            <div class="form-group">
                            <textarea v-model="form.bio" name="bio" id="bio"
                                      placeholder="Short bio for user (Optional)"
                                      class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                                <has-error :form="form" field="bio"></has-error>
                            </div>
                            <div class="form-group">
                                <select name="type" v-model="form.type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard User</option>
                                    <option value="author">Author</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>
                            <div class="form-group">
                                <input v-model="form.password" type="password"
                                       name="password" placeholder="Password" id="password"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                            </div>

                        </div> <!-- end class="modal-body" -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-success">Update</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>  <!-- end Form Action -->
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        data(){
            return{
                posts : [''],
                page: 1,
                perPage: 9,
                pages: [],
                users : {},
                form: new Form({
                    name : '',
                    email: '',
                    password: '',
                    type: '',
                    photo: '',
                    bio: ''
                })
            }
        },
        methods: {
            loadUsers(){

                axios.get("api/user").then (( data ) => (this.users = data.data));
            },
            getPosts () {
                let data = [];
                for(let i = 0; i < 50; i++){
                    this.posts.push({first: 'John',
                        last:'Doe',
                        suffix:'#' + i});
                }
            },
            
            createUser(){
                this.$Progress.start();
                this.form.post('api/user');
            }
        },
        created() {
            this.loadUsers();
            this.getPost();
        }
    }
    new Vue({
        el: "#app",
        data () {
            return {
                posts : [''],
                page: 1,
                perPage: 9,
                pages: [],
            }
        },
        methods:{
            getPosts () {
                let data = [];
                for(let i = 0; i < 50; i++){
                    this.posts.push({first: 'John',
                        last:'Doe',
                        suffix:'#' + i});
                }
            },
            setPages () {
                let numberOfPages = Math.ceil(this.posts.length / this.perPage);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate (posts) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return  posts.slice(from, to);
            }
        },
        computed: {
            displayedPosts () {
                return this.paginate(this.posts);
            }
        },
        watch: {
            posts () {
                this.setPages();
            }
        },
        created(){
            this.getPosts();
        },
        filters: {
            trimWords(value){
                return value.split(" ").splice(0,20).join(" ") + '...';
            }
        }
    })
</script>
<div id="app" class="col-sm-12">
    <div class="offset">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User ID</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="p in displayedPosts">
                <td>{{p.first}}</td>
                <td>{{p.last}}</td>
                <td>{{p.suffix}}</td>
            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
                </li>
                <li class="page-item">
                    <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
                </li>
                <li class="page-item">
                    <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
                </li>
            </ul>
        </nav>
    </div>
</div>