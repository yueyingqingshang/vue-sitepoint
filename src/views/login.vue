<template>
  <section class="login-page">
    <div class="page-top">
      <p style="font-size: 36px;padding: 10px 0;">Vue.js Chat</p>
      <p style="font-size: 18px;padding: 10px 0;">Powered by Chatkit SDK and element-ui</p>
      <p style="font-size: 18px;padding: 10px 0;">For more information visit website</p>
      <a href="https://pusher.com/chatkit" target="_blank" class="chatkit-link">更多信息</a>
    </div>
    <div class="login-form">
      <h5>Chat Login</h5>
      <el-form :model="formData" ref="modifyPasswordForm">
        <el-form-item>
          <el-input v-model="formData.userId" autocomplete="off" size="mini" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" class="full-width">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formData: {
        userId: ''
      },
      viewData: {
        labelWidth: '80px'
      }
    }
  }
}
</script>

<style lang="scss">
  .login-page {
    .page-top {
      height: 200px;
      background: #409eff;
      color: #fff;
      padding: 20px 30px;
      .chatkit-link {
        color: #fff;
        display: inline-block;
        text-decoration: none;
        background-color: #909399;
        border-color: #909399;
        border-radius: 4px;
        padding: 5px 10px;
        font-size: 14px;
      }
    }
    .login-form {
      text-align: center;
      width: 300px;
      margin: 40px auto;
      .full-width {
        width: 100%;
      }
    }
  }
</style>