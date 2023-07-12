<template>
    <div>
        子组件2
    </div>
</template>
<script>
import bus from '@/common/eventBus';
export default {
    name: 'NewAct',
    data() {
        return {
            newObj: {}
        }
    },
    props: {

    },
    created() {
        bus.$on('update', data => {
            console.log('data', data)
        })
    },
    methods: {

    },
    watch: {

    }
}
</script>