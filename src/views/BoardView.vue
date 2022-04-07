    <template>
    <div class="board">
        <h1>게시글 목록입니다</h1>
        <a v-for="n in num" :key="n">
        <router-link :to="`/board/${n}`">{{n}}</router-link> |
    </a>
    
        <router-view></router-view>
    </div>
    </template>

    <script>
        export default {
        name: 'BoardView',
        data : ()=> ({
            num: 10
        })
        }
</script>
