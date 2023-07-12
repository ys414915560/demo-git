<template>
    <div>
        子组件1


        ---------------------



        <slot name="c"></slot>
    </div>
</template>
<script>
export default {
    name: 'NewAct',
    data() {
        return {
            text: ''
        }
    },
    props: {

    },
    created() {

    },
    methods: {

    },
    watch: {

    }
}
</script>