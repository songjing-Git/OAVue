<template>
    <div id="headImg">
        <div id="myPhoto">
            <div class="viewPhoto" @click="monidianji">
                <i class="el-icon-plus"></i>
                <img :src=imageSave alt="" id="portrait" style="width: 200px;height: 200px" />
            </div>
            <p>提示：请选择本地图片上传，支持各种图片格式</p>
            <div class="listBox">
                <input type="file" id="saveImage" name="myphoto">
            </div>
            <div class="save">
                <el-button type="danger" size="small" @click="imageSubmit">上传头像</el-button>
                <div style="margin-bottom:70px;padding-top: 30px"><span>{{uploadDate}}</span></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "UI",
        props: {},
        data() {
            return {
                imageSave:"",//图片路径
                uploadDate:"",//上传时间
            }
        },
        computed: {},
        methods: {
            monidianji(){
                document.getElementById('saveImage').click()
            },
            //上传
            imageSubmit(){
                let _this=this
                let x = document.getElementById('saveImage').files[0];
                let params = new FormData() ; //创建一个form对象
                params.append('file',x,x.name);  //append 向form表单添加数据
                //添加请求头  通过form添加的图片和文件的格式必须是multipart/form-data
                let config = {headers:{'Content-Type':'multipart/form-data'}};
                //发起ajax请求存放在服务端
                this.$axios.post(api.personHeadImg,params,config)
                    .then(function(res){
                        _this.imageSave = res.data.lujing;
                        let mydate=new Date()
                        _this.uploadDate="上传时间："+mydate.toLocaleString()
                        _this.$notify({
                            type: 'success',
                            message: '上传成功!',
                            offset:160
                        })
                    }).catch(function (error) {
                    console.log(error);
                    _this.$notify({
                        type: 'warning',
                        message: '上传失败!',
                        offset:160
                    })
                })
            },
            //实时显示该图片在页面 预览
            yulan(){
                document.getElementById('saveImage').onchange = function () {
                    var imgFile = this.files[0];
                    var fr = new FileReader();
                    fr.onload = function () {
                        document.getElementById('portrait').src = fr.result;
                    };
                    fr.readAsDataURL(imgFile);
                }
            }

        },
        watch: {},
        mounted(){
            this.yulan();//预览图片
        },


    }
</script>

<style scoped >

</style>
