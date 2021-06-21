<template>
    <div>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">选择excel文件上传</Button>
        </Upload>

    </div>

</template>

<script>
    import api from "../../api/api";

    export default {
        name: "UI2",
        props: {},
        data() {
            return {
                file:Blob
            }
        },
        computed: {},
        methods: {
            handleUpload (file) {
                this.file = file;
                return false;
            },

            upload () {
                let fileFormData = new FormData();
                fileFormData.append('file', this.file);
                let requestConfig = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }
                this.axios.post('/send/UI', fileFormData, requestConfig).then((res) => {
                    alert(res.data.msg)
                })

            }
        },
        watch: {}
    }
</script>

<style scoped>

</style>
