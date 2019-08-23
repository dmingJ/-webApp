<template>
    <div class="star" >
        <span class="star-on"></span>
        <span class="star-on"></span>
        <span class="star-on"></span>
        <span class="star-on"></span>
        <span class="star-off"></span>
    </div>

</template>
<script>
export default {
    
}
</script>
<style>
.star{
    height: 12px;
    margin: 32px auto;
}
.star span{
    width: 24px;
       height: 24px;
       display: inline-block;
       margin-right: 12px;
       background-size: 24px;
}
   .star-on{
       background: url('./star24_on@2x.png')no-repeat; 
   }
   .star-off{
       background: url('./star24_off@2x.png')no-repeat;
   }
</style>

 
