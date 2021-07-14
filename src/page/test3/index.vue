<template>
  <div>
    <el-aside>
      <SideMenu :items="items"></SideMenu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
    components: {
        SideMenu
    },
    data() {
        return {
            items: [
                {
                    index: '1',
                    title: '基础设置',
                    nextItem: [
                        {
                            index: '1-1',
                            title: '客户',
                            nextItems: [
                                {
                                    index: '/test3-2-2-4-1',
                                    title: '客户'
                                },
                                {
                                    index: '/test3-2-2-4-2',
                                    title: '客户状况'
                                }
                            ]
                        },
                        {
                            index: '1-2',
                            title: '供应商',
                            nextItems: [
                                {
                                    index: '/test3-2-3',
                                    title: '供应商'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style>
</style>
