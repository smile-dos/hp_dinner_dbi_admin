<template>
  <div class="app-container">
    <div class="filters">
      <el-input v-model="filters.keyword" class="filters-input" />
      <el-button type="primary" class="filters-buttons" @click.native="searchKeyword()">搜索</el-button>
    </div>
    <el-table :data="userList" border @sort-change="userListSortChange">
      <el-table-column label="#" prop="id" width="55" />
      <el-table-column :label="$t('userList.tableColumn.username')" prop="username" />
      <el-table-column :label="$t('userList.tableColumn.isSuperuser')" prop="is_superuser">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.is_superuser === true">是</el-tag>
          <el-tag v-else>否</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建日期" prop="create_at" sortable />
      <el-table-column label="更新日期" prop="update_at" sortable />
      <el-table-column label="操作">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination :current-page.sync="filters.page" :page-size.sync="filters.pageSize" :total="filters.total" @size-change="handleSizeChange" @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { getUserList } from '@/api/user'
export default {
  name: 'UserList',
  components: {
    Pagination
  },
  data() {
    return {
      userList: [], // 用户列表
      listLoading: false,
      filters: {
        page: 1,
        pageSize: 20,
        total: 0,
        keyword: null,
        sortName: null,
        sortOrder: null
      }
    }
  },
  created() {
    this.loadUserList()
  },
  mounted() {},
  methods: {
    loadUserList() {
      getUserList(
        this.filters.page,
        this.filters.pageSize,
        this.filters.keyword,
        this.filters.sortName,
        this.filters.sortOrder
      ).then(res => {
        if (res.code === 100200) {
          this.userList = res.users.list
          this.filters.total = res.users.total
        }
      })
    },
    handleSizeChange(pageSize) {
      this.filters.pageSize = pageSize
      this.loadUserList()
    },
    handleCurrentChange(page) {
      this.filters.page = page
      this.loadUserList()
    },
    searchKeyword() {
      this.loadUserList()
    },
    userListSortChange(data) {
      this.filters.sortName = data.prop
      this.filters.sortOrder = data.order
      this.loadUserList()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container .filters {
  margin: 10px 0px 20px 0px;

  .filters-input {
    width: 300px;
    margin-right: 10px;
  }

  .filters-buttons {
    margin-right: 10px;
  }
}
</style>
