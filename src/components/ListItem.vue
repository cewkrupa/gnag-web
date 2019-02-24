<template>
    <v-container>
        <v-layout row >
            <v-flex xs12>
                <v-checkbox class="list-checkbox" v-model="item.checked">
                </v-checkbox>
                <v-text-field v-if="edit" full-width no-details class="list-text edit" v-model="item.text" @blur="edit=false" v-focus.lazy="edit">
                </v-text-field>
                <p class="list-text" @click="edit=true" v-else>{{item.text}}</p>
                <v-btn color="red" icon @click="$emit('item-remove', itemId)"><v-icon>remove</v-icon></v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mixin as focusMixin } from 'vue-focus'

    function findItem(id) {
        return function(item) {
            console.log(this.$store.state.list);
            return item.id === id
        }
    }

    export default {
        mixins: [focusMixin],
        name: "ListItem",
        props: {
            itemId: Number,
        },
        data() {
            return {
                myItemId: this.itemId,
                edit: false,
                item: this.$store.getters.getItemFromListById(this.itemId),
            }
        },
    }
</script>

<style scoped>
    .list-checkbox, .list-text{
        display: inline-block;
        vertical-align: middle;
    }

</style>
