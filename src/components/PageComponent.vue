<template>
  <div class="page">
    <p>페이지입니다</p>
  </div>
</template>



<script>
import datas from "../assets/data.json"

export default {
  name: 'PageComponent',
  props : {
    msg : SVGStringList
  },
  data : function() {
    return { datas : datas, }
  }

}
</script>
