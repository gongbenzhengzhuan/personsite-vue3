<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div>
    <h1>这里是home页面</h1>
    <!--    <router-link to="/table">Go to table</router-link>-->
    <!--    <router-view></router-view>-->
    <el-button>哈哈，我是elementui</el-button>
  </div>
  <!--说明引入组件是成功的-->
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000

/*getAllData().then(
    res=>{
        let data=res.data;
        let result = data.data;
       console.log(data)
      console.log(res)
      console.log(result)
       // let resultData = JSON.parse(result);
       // console.log(resultData)


        result.forEach(
            element=>{
              console.log(element)
              console.log(element.userName)
              console.log(element.createTime)
              console.log(element.operationType)
              // this.tableData.push(
              //     {
              //       name:element.userName,
              //       date:element.createTime,
              //       address: element.operationType
              //     }
              // );
            }
        );

   // console.log(this.tableData)
    }
)*/


export default {
  name: 'App',
  components: {
    HelloWorld
  },

  methods: {
    GetUserInfo() {
      //axios.get('http://123.60.190.167:8088//datasystem-client/labelManage/getLabelFeature?id=10991')

      const getNewList = () => {
        const params = {
          id: 10991
        }
        getArticleList(params)
            //getAllData()
            .then(
                response => {
                  let data = response.data;
                  let result = data.data;
                  console.log(result)
                  result.forEach(
                      element => {
                        this.tableData.push(
                            {
                              name: element.userName,
                              date: element.createTime,
                              address: element.operationType
                            }
                        );
                      }
                  );
                }
            )
      }
    }
  }
  ,
  mounted() {
    this.GetUserInfo()
  },
  data() {
    return {
      tableData: [
        /*         {
               date: '2016-05-02',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1518 弄'
             }, {
               date: '2016-05-04',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1517 弄'
             }, {
               date: '2016-05-01',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1519 弄'
             }, {
               date: '2016-05-03',
               name: '王小虎',
               address: '上海市普陀区金沙江路 1516 弄'
             }*/
      ],
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
