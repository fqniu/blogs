<template>
  <div class="content-set w1510">
    <!-- <div class="task-info">
      <div class="content-title fs18">内容设置</div>
      <div class="task-wrapper bgfff bdr20 mt20 fs14">
        <div><span class="wrapper-title">任务名称：</span><span>{{ contentData.title }}</span></div>
        <div class="mt13"><span class="wrapper-title">任务描述：</span> </div>
        <div class="mt13">
         {{ contentData.taskDescribe }}
        </div>
      </div>
    </div> -->

    <div class="task-content mt30" >
      <div class="content-title fs18">任务内容</div>
      <div v-for="(item, idx) in totalItem" :key="item.id">
        <FormItem :idx="idx" @addItem="addItem" @deleteItem="deleteItem" :dataCont="dataCont" />
      </div>
    </div>

    <div class="btn flex-center-center mt70 h28">
      <Button text="保存提交" background="#4646E6" color="#fff" class="save-submit"  @click.native="submitForm()" ></Button>
      <Button text="重新填写" background="#fff" color="#4646E6" border="#4646E6" class="ml10 reset"  @click.native="resetForm()" ></Button>
    </div>
  </div>
</template>

<script>
import Button from './Button';
import FormItem from './formItem';

// import { newTaskQuestionQuery, newTaskQuestionAdd } from '@/api/newTask';

export default {
  name: 'contentSet',
  components: {
    Button,
    FormItem,
  },
  props: {},
  data () {
    return {
      taskId:'',
      contentData: {},
      totalItem:[{
        id:1,
        title: '',
        desc: '',
      },{
        id:2,
        title: '',
        desc: '',
      }],
      num: 2,
    };
  },
  computed: {
    newVal:{
      get(){
        return this.totalItem.length
      },
      set(value){
        this.num = value
      }
    }
  },
  methods: {
    async queryContentSet(val){
      let params = {
        id: val
      }
      let res = await newTaskQuestionQuery(params)
      console.log(res);
      this.contentData = res.item
    },
    addItem(value){
      this.totalItem.push({
        title: '',
        desc: '',
        id: ++this.num,
      })
       console.log(this.totalItem);
    },
    deleteItem(value){
      console.log(value);
      console.log(this.totalItem);
      this.totalItem.map((item, idx) => {
        if(idx == value){
          console.log(item);
          this.totalItem.splice(idx, 1);
        }
      })
      // this.totalItem.splice(value, 1);
      console.log(this.totalItem);
    },
    async submitForm(){
      console.log(this.$children);
      let arr = [];
      this.$children.forEach(elm => {
        if(elm.contentSetForm){
          arr.push(elm.contentSetForm)
        }
      });
      // console.log(arr);
      let data = []
      arr.forEach( item =>{
        let obj ={}
        obj.taskId = this.taskId;
        obj.title = item.contTitle;
        obj.questionDescribe = item.contDesc;
        obj.questionType = item.submitform;
        if(item.iptDataObj.length > 0 && item.submitform == 1 || item.submitform == 2){
          let str = '';
          item.iptDataObj.forEach(v => {
            str += v.value + '|'
          });
          obj.item = str;
        } else {
          obj.item = "";
        }
        data.push(obj);
      })
      console.log(data);
      let res = await newTaskQuestionAdd(data)
      console.log(res);
      this.$router.push({ path: '/systemManage/list' })
    },
    resetForm() {
      this.$refs[formName].resetFields();
    },
  },
  created(){
    // console.log(this.$route.query.id);
    // this.taskId = this.$route.query.id;
    // this.queryContentSet(this.taskId)
  },
  activated(){
    // console.log(this.$route.query.id);
    // this.taskId = this.$route.query.id;
    // this.queryContentSet(this.taskId)
  },
}
</script>

<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.w1510{
  width: 1510px;
}
.content-set{
  padding-bottom: 60px;
}
.content-title{
  color: $menuActiveText;
  font-weight: 800;
  position: relative;
  padding-left: 20px;
  &::before{
    content:'';
    width: 10px;
    height: 10px;
    background: $subMenuActiveText;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.wrapper-title{
  color: $menuActiveText;
  font-weight: 600;
}
.task-wrapper{
  padding: 28px 40px;
}
</style>
