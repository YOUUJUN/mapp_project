<template>
    <view class="wrap">
        <u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">

            <u-form-item :label-position="labelPosition" label="车主姓名" prop="CAR_OWNER_NAME" label-width="150">
                <u-input :border="border" type="text" v-model="model.CAR_OWNER_NAME" placeholder="请填写车主姓名"></u-input>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="车主电话" prop="CAR_OWNER_PHONE" label-width="150">
                <u-input :border="border" type="text" v-model="model.CAR_OWNER_PHONE" placeholder="请填写车主电话"></u-input>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="车主身份证" prop="CAR_OWNER_CODE" label-width="160">
                <u-input :border="border" type="text" v-model="model.CAR_OWNER_CODE" placeholder="请填写车主身份证"></u-input>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="燃油类型" prop="FUEL_NAME" label-width="150">
                <u-input :border="border" type="select" :select-open="selectList.FUEL_NAME_LIST.show" @click="selectList.FUEL_NAME_LIST.show = true" v-model="model.FUEL_NAME" placeholder="请选择车辆类型"></u-input>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="车牌号码" prop="CAR_NO" label-width="150">
                <u-input :border="border" type="text" v-model="model.CAR_NO" placeholder="请输入车牌号码"></u-input>
                <u-button @click="openCarNoInput" slot="right" size="mini" type="success">输入</u-button>

            </u-form-item>

            <u-form-item :label-position="labelPosition" label="车辆类型" prop="CAR_KIND" label-width="150">
                <u-input :border="border" type="select" :select-open="selectList.FUEL_NAME_LIST.show" @click="selectList.FUEL_NAME_LIST.show = true" v-model="model.CAR_KIND" placeholder="请选择车辆类型"></u-input>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="残值款" prop="ESTIMATE_AMOUNT" label-width="140">
                <u-input :border="border" type="text" v-model="model.ESTIMATE_AMOUNT" placeholder="请输入残值款"></u-input>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="录入时间" prop="IN_DATE" label-width="150">
                <u-input @click="showCalendar" :disabled='true' :border="border" type="time" v-model="model.IN_DATE" placeholder="请选择录入时间"></u-input>
                <u-icon @click="showCalendar" slot="right" name="calendar" size="40" color="#909399"></u-icon>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="水果品种" label-width="150" prop="likeFruit">
                <u-checkbox-group @change="checkboxGroupChange" width="auto" wrap="radioCheckWrap">
                    <u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">{{ item.name }}</u-checkbox>
                </u-checkbox-group>
            </u-form-item>
            <u-form-item :label-position="labelPosition" label="结算方式" prop="payType" label-width="150">
                <u-radio-group v-model="radio" @change="radioGroupChange" width="auto" :wrap="radioCheckWrap">
                    <u-radio shape="circle" v-for="(item, index) in radioList" :key="index" :name="item.name">{{ item.name }}</u-radio>
                </u-radio-group>
            </u-form-item>

            <u-form-item :label-position="labelPosition" label="上传图片" prop="photo" label-width="150">
                <u-upload width="160" height="160"></u-upload>
            </u-form-item>


        </u-form>

<!--        <view class="agreement">-->
<!--            <u-checkbox v-model="check" @change="checkboxChange"></u-checkbox>-->
<!--            <view class="agreement-text">-->
<!--                勾选代表同意uView的版权协议-->
<!--            </view>-->
<!--        </view>-->

        <u-button @click="submit">提交</u-button>


        <u-select mode="single-column" :list="selectList.FUEL_NAME_LIST.data" v-model="selectList.FUEL_NAME_LIST.show" @confirm="choiceFuel"></u-select>
        <u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>

        <u-calendar v-model="calendar.show" ref="calendar" @change="calendarChange" :mode="calendar.mode"
                    :start-text="calendar.startText" :end-text="calendar.endText" :range-color="calendar.rangeColor"
                    :range-bg-color="calendar.rangeBgColor" :active-bg-color="calendar.activeBgColor" :btn-type="calendar.btnType"
        >
        </u-calendar>

    </view>
</template>

<script>
    export default {
        data() {
            let that = this;
            return {
                model: {
                    name: '',
                    sex: '',
                    likeFruit: '',
                    intro: '',
                    payType: '支付宝',
                    agreement: false,
                    region: '',
                    goodsType: '',
                    phone: '',
                    code: '',
                    password: '',
                    rePassword: '',
                    remember: false,
                    photo: '',


                    CAR_OWNER_NAME : '',
                    CAR_OWNER_PHONE : '',
                    CAR_OWNER_CODE : '',
                    FUEL_NAME : '',
                    CAR_NO : '',
                    CAR_KIND : '',
                    ESTIMATE_AMOUNT : '',
                    IN_DATE : '',

                },

                selectList : {
                    FUEL_NAME_LIST : {
                        show : false,
                        data : [
                            {
                                value : '汽油',
                                label : '汽油'
                            },
                            {
                                value : '柴油',
                                label : '柴油'
                            },
                            {
                                value : '纯电',
                                label : '纯电'
                            }
                        ]
                    }
                },

                calendar : {
                    show : false,
                    mode : 'date',
                    result: "请选择日期",
                    startText: '开始',
                    endText: '结束',
                    rangeColor: '#2979ff',
                    rangeBgColor: 'rgba(41,121,255,0.13)',
                    activeBgColor: '#2979ff',
                    btnType: 'primary',
                },

                rules: {
                    name: [
                        {
                            required: true,
                            message: '请输入姓名',
                            trigger: 'blur' ,
                        },
                        {
                            min: 3,
                            max: 5,
                            message: '姓名长度在3到5个字符',
                            trigger: ['change','blur'],
                        },
                        {
                            // 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
                            validator: (rule, value, callback) => {
                                // 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
                                return this.$u.test.chinese(value);
                            },
                            message: '姓名必须为中文',
                            // 触发器可以同时用blur和change，二者之间用英文逗号隔开
                            trigger: ['change','blur'],
                        },
                        // 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
                        // {
                        // 	trigger: ['blur'],
                        // 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
                        // 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
                        // 	asyncValidator: (rule, value, callback) => {
                        // 		this.$u.post('/ebapi/public_api/index').then(res => {
                        // 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
                        // 			if(res.error) {
                        // 				callback(new Error('姓名重复'));
                        // 			} else {
                        // 				// 如果没有错误，也要执行callback()回调
                        // 				callback();
                        // 			}
                        // 		})
                        // 	},
                        // }
                    ],
                    sex: [
                        {
                            required: true,
                            message: '请选择性别',
                            trigger: 'change'
                        },
                    ],
                    intro: [
                        {
                            required: true,
                            message: '请填写简介'
                        },
                        {
                            min: 5,
                            message: '简介不能少于5个字',
                            trigger: 'change' ,
                        },
                        // 正则校验示例，此处用正则校验是否中文，此处仅为示例，因为uView有this.$u.test.chinese可以判断是否中文
                        {
                            pattern: /^[\u4e00-\u9fa5]+$/gi,
                            message: '简介只能为中文',
                            trigger: 'change',
                        },
                    ],
                    likeFruit: [
                        {
                            required: true,
                            message: '请选择您喜欢的水果',
                            trigger: 'change',
                            type: 'array',
                        }
                    ],
                    payType: [
                        {
                            required: true,
                            message: '请选择任意一种支付方式',
                            trigger: 'change',
                        }
                    ],
                    region: [
                        {
                            required: true,
                            message: '请选择地区',
                            trigger: 'change',
                        }
                    ],
                    goodsType: [
                        {
                            required: true,
                            message: '请选择商品类型',
                            trigger: 'change',
                        }
                    ],
                    phone: [
                        {
                            required: true,
                            message: '请输入手机号',
                            trigger: ['change','blur'],
                        },
                        {
                            validator: (rule, value, callback) => {
                                // 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
                                return this.$u.test.mobile(value);
                            },
                            message: '手机号码不正确',
                            // 触发器可以同时用blur和change，二者之间用英文逗号隔开
                            trigger: ['change','blur'],
                        }
                    ],
                    code: [
                        {
                            required: true,
                            message: '请输入验证码',
                            trigger: ['change','blur'],
                        },
                        {
                            type: 'number',
                            message: '验证码只能为数字',
                            trigger: ['change','blur'],
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: ['change','blur'],
                        },
                        {
                            // 正则不能含有两边的引号
                            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
                            message: '需同时含有字母和数字，长度在6-12之间',
                            trigger: ['change','blur'],
                        }
                    ],
                    rePassword: [
                        {
                            required: true,
                            message: '请重新输入密码',
                            trigger: ['change','blur'],
                        },
                        {
                            validator: (rule, value, callback) => {
                                return value === this.model.password;
                            },
                            message: '两次输入的密码不相等',
                            trigger: ['change','blur'],
                        }
                    ],
                },

                border: false,
                check: false,
                checkboxList: [
                    {
                        name: '荔枝',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '香蕉',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '橙子',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '草莓',
                        checked: false,
                        disabled: false
                    }
                ],

                radioList: [
                    {
                        name: '支付宝',
                        checked: true,
                        disabled: false
                    },
                    {
                        name: '微信',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '银联',
                        checked: false,
                        disabled: false
                    },
                    {
                        name: '现金',
                        checked: false,
                        disabled: false
                    }
                ],
                radio: '支付宝',

                radioCheckWrap: false,
                labelPosition: 'left',
                codeTips: '',
                errorType: ['message'],
            };
        },
        onLoad() {

        },

        created(){

            for(let item in this.model){
                let prop = `model.${item}`;
                console.log('prop',prop);
                this.$watch(prop,function(old, newbie){
                    console.log('ok==>',old, newbie);
                })
            }
        },

        computed: {
            borderCurrent() {
                return this.border ? 0 : 1;
            }
        },

        onReady() {
            // this.$refs.uForm.setRules(this.rules);
        },
        methods: {

            showCalendar(index) {
                this.calendar.show = !index;
            },

            calendarChange(e) {
                if (this.mode == 'range') {
                    this.calendar.result = e.startDate + " - " + e.endDate;
                } else {
                    this.calendar.result = e.result;
                }
            },

            openCarNoInput(){

                uni.navigateTo({
                    url: '/pages/carNo/carNo',
                    success : result => {
                        console.log('result', result);
                    },
                    fail : msg =>{
                        console.log('msg', msg);
                    }
                });
            },


            //选择燃油类型
            choiceFuel(e){
                console.log('e=>',e);
                console.log('value',e[0].value);
                this.model.FUEL_NAME = e[0].value;
            },






















            submit() {
                this.$refs.uForm.validate(valid => {
                    if (valid) {
                        if(!this.model.agreement) return this.$u.toast('请勾选协议');
                        console.log('验证通过');
                    } else {
                        console.log('验证失败');
                    }
                });
            },


            // checkbox选择发生变化
            checkboxGroupChange(e) {
                this.model.likeFruit = e;
            },
            // radio选择发生变化
            radioGroupChange(e) {
                this.model.payType = e;
            },
            // 勾选版权协议
            checkboxChange(e) {
                this.model.agreement = e.value;
            },


            codeChange(text) {
                this.codeTips = text;
            },
            // 获取验证码
            getCode() {
                if(this.$refs.uCode.canGetCode) {
                    // 模拟向后端请求验证码
                    uni.showLoading({
                        title: '正在获取验证码',
                        mask: true
                    })
                    setTimeout(() => {
                        uni.hideLoading();
                        // 这里此提示会被this.start()方法中的提示覆盖
                        this.$u.toast('验证码已发送');
                        // 通知验证码组件内部开始倒计时
                        this.$refs.uCode.start();
                    }, 2000);
                } else {
                    this.$u.toast('倒计时结束后再发送');
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .wrap {
        padding: 30rpx;
    }

    .agreement {
        display: flex;
        align-items: center;
        margin: 40rpx 0;

        .agreement-text {
            padding-left: 8rpx;
            color: $u-tips-color;
        }
    }
</style>
