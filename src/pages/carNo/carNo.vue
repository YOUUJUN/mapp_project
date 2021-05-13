

<template>
    <view class="page-carnumber-test">
        <view class="number-wrap">
            <car-number v-model="carNumber"></car-number>
        </view>
    </view>
</template>

<script>
    import CarNumber from '@/components/codecook-carnumber/codecook-carnumber.vue';

    export default {
        components: {
            CarNumber
        },
        data() {
            return {
                carNumber: '渝AT9999',
            }
        },
        watch: {
            carNumber(num) {
                console.log(num);
            },
        },
        methods: {
        },
        beforeMount() {
        },
    }
</script>

<style scoped lang="less">
    .number-wrap {
        padding: 30rpx;
    }
</style>
