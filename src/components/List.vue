<template>
    <div>
        <ListItem
                v-for="item in myList"
                v-bind:item-id="item.id"
                class="list-item">

        </ListItem>
    </div>
</template>

<script>
    import ListItem from "./ListItem";

    export default {
        name: "List",
        components: {
            ListItem
        },
        data() {
            return {
                myList: this.$store.state.list
            }
        }
    }
</script>

<style scoped>
    .list-item {
        padding: 0;
    }
</style>
