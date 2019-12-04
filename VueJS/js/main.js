var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        albumURL: 'https://jsonplaceholder.typicode.com/albums',
        photosURL: 'https://jsonplaceholder.typicode.com/photos',
        albumData: [],
        photosData : [],
        tableData: [],
        album: {
            id: 'Album ID',
            title: 'Album Title'
        },
        photos: {
            title: 'Photos Title',
            thumbnail : 'Photos Thumbnail'
        },
        page: 0,
        rowCount: 25,
        searchAlbumByTitle: '',
        searchPhotosByTitle: '',
    },
    methods: {
        rightClick: function(){
            if(this.page * this.rowCount + this.rowCount < this.filteredList.length) this.page++;
        },
        leftClick: function(){
            if(this.page>0) this.page--;
        },
        sortByAlbumTitle: function(){
            this.tableData.sort(function(a,b) {
                let x = a.albumTitle.toLowerCase();
                let y = b.albumTitle.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        },
        sortByPhotosTitle: function(){
            this.tableData.sort(function(a,b) {
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });

        },
        sortById: function(){
            this.tableData.sort(function(a,b) {
               return a.id - b.id;
            });

        },

    },
    computed: {
        filteredList: function() {
            this.page = 0;
            let list = [];
            if(this.searchAlbumByTitle == '' &&  this.searchPhotosByTitle == '') {
                return this.tableData;
            }
            else if(this.searchAlbumByTitle != '' &&   this.searchPhotosByTitle == '') {
                return this.tableData.filter(data => {
                    return data.albumTitle.toLowerCase().includes(this.searchAlbumByTitle.toLowerCase())
                });
            }
            else if(this.searchAlbumByTitle == '' &&   this.searchPhotosByTitle != '') {
                return this.tableData.filter(data => {
                    return data.title.toLowerCase().includes(this.searchPhotosByTitle.toLowerCase())
                });
            }
            else{
                return this.tableData.filter(data => {
                    return data.albumTitle.toLowerCase().includes(this.searchAlbumByTitle.toLowerCase()) &&
                        data.title.toLowerCase().includes(this.searchPhotosByTitle.toLowerCase())
                });
            }
            return list;
        },
        fromData: function(){
            if(this.totalData == 0)return 0;
            return this.page* this.rowCount + 1;
        },
        toData: function(){
            return this.page* this.rowCount + this.rowCount > this.filteredList.length ? this.filteredList.length : this.page* this.rowCount + this.rowCount;
        },
        totalData: function(){
            return this.filteredList.length;
        },
    },
    created(){
        fetch(this.albumURL)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.albumData = data;
                console.log("albumdata: ");
                console.log(this.albumData);
                fetch(this.photosURL)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        this.photosData = data;
                        console.log("photosData: ");
                        console.log(this.photosData);
                        this.tableData = this.photosData.map( p => {
                            let obj = {};
                            let album = this.albumData.find(a => a.id == p.albumId);
                            obj.albumId = p.albumId;
                            obj.id = p.id;
                            obj.title = p.title;
                            obj.url = p.url;
                            obj.thumbnailUrl = p.thumbnailUrl;
                            obj.albumTitle = album.title;
                            obj.userId = album.userId;
                            return obj;
                        });
                    });


            });



    }
});