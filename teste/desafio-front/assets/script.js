fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => {
    res.json()
    .then(json => {
        listaPosts(json)
    })
    .then(
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                res.json()
                .then(json => {
                    listaComents(json)
                })
            })
    )
})

function listaPosts(posts){
    const containerDOM = document.querySelector('.container');
    posts.forEach(post =>{   
        const conteudo = 
            `<div class="post">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-text">${post.body}</p>
                <hr>
                <ul class="comentarios" id="p${post.id}"> 
                
                </ul>
            </div>`;
        containerDOM.insertAdjacentHTML('beforeend', conteudo);
    });
};

function listaComents (comentarios){
    comentarios.forEach(comentario =>{
        const postDOM = document.querySelector(`#p${comentario.postId}`);
        const conteudo = `                 
            <li class="comentario" id="${comentario.id}">
                <p class="email">${comentario.email}</p>:
                <p class="corpo">${comentario.body}</p>
            </li> <br>`;
        postDOM.insertAdjacentHTML('beforeend', conteudo);
    }); 
};