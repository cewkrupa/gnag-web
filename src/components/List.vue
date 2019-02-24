<template>
    <div>
        <ListItem
                v-for="(item, index) in myList"
                v-bind:item-id="item.id"
                v-bind:key="item.id"
                v-on:item-remove="deleteItemFromListById($event)"
                class="list-item">
        </ListItem>
        <v-container>
            <v-form v-on:submit.prevent="addItem">
            <v-layout row>
                <v-flex xs12>
                        <v-text-field
                                v-model="newText"
                                class="new-item-text"
                                placeholder="new item"
                                single-line
                        ></v-text-field>
                        <v-btn class="new-item-btn" raised @click="addItem('new thing')">Add Item</v-btn>

                </v-flex>
            </v-layout>
            </v-form>
        </v-container>
    </div>
</template>

<script>
    import ListItem from "./ListItem";
    import { mapMutations } from 'vuex'

    export default {
        name: "List",
        components: {
            ListItem
        },
        data() {
            return {
                myList: this.$store.state.list,
                newText: '',
                maxId: this.$store.state.list.length + 1
            }
        },
        methods: {
            addItem() {
                this.myList.push({
                    id: this.maxId++,
                    text: this.newText,
                    checked: false
                });
                this.newText = ''
            },
            ...mapMutations(['deleteItemFromListById'])
        }
    }
</script>

<style scoped>
    .list-item {
        padding: 0;
    }
    .new-item-text, .new-item-btn {
        display: inline-block;
        vertical-align: middle;
    }
</style>
