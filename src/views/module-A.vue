<template>
    <div>
        组件一:父组件-A
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
    },
    updated() {

    },
    methods: {
        add() {
            this.newNum++;
        },
        handleUpdate(value) {
            value();
            // this.childValue = value;
        }
    }
}
</script>

<style></style>