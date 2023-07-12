<template>
    <div>
        组件一:父组件
        <moduleA>
            <el-button slot="a">jie</el-button>
            <el-button slot="b">hua</el-button>
            <el-button slot="c">fa</el-button>
        </moduleA>
        <moduleB></moduleB>
    </div>
</template>

<script>
export default {
    name: 'MyLayout',
    data() {
        return {
            newNum: 1,
            flag: '',
            childValue: {}
        }
    },
    components: {
        moduleA: () => import('./moduleA.vue'),
        moduleB: () => import('./moduleB.vue')
    },
    updated() {

    },
    methods: {
    }
}
</script>

<style></style>