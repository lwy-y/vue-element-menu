import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [{
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () =>
      import( /* webpackChunkName: "home" */ '../components/common/Home'),
    meta: {
      title: '自述文件'
    },
    children: [
      {
        path: '/dashboard',
        component: () =>
          import( /* webpackChunkName: "dashboard" */ '../pages/Dashboard'),
        meta: {
          title: '系统首页'
        }
      },
      {
        path: '/standardShipment',
        component: () =>
          import( /* webpackChunkName: "pleaseBuy" */ '../pages/supplyChain/salesManage/standardShipment/standardShipment'),
        meta: {
          title: '标准出货列表'
        }
      },
      {
        path: '/formShipment',
        component: () =>
          import( /* webpackChunkName: "pleaseBuy" */ '../pages/supplyChain/salesManage/standardShipment/formShipment'),
        meta: {
          title: '标准出货'
        }
      },
      {
        path: '/pleaseBuy',
        component: () =>
          import( /* webpackChunkName: "pleaseBuy" */ '../pages/supplyChain/purchaseManage/pleaseBuy/pleaseBuy'),
        meta: {
          title: '请购列表'
        }
      },
      {
        path: '/formPB',
        component: () =>
          import( /* webpackChunkName: "pleaseBuy" */ '../pages/supplyChain/purchaseManage/pleaseBuy/formPB'),
        meta: {
          title: '请购'
        }
      },
      {
        path: '/plesContract',
        component: () =>
          import( /* webpackChunkName: "plesContract" */ '../pages/supplyChain/purchaseManage/plesContract/plesContract'),
        meta: {
          title: '采购合同列表'
        }
      },
      {
        path: '/formPlesContract',
        component: () =>
          import( /* webpackChunkName: "plesContract" */ '../pages/supplyChain/purchaseManage/plesContract/formPlesContract'),
        meta: {
          title: '采购合同'
        }
      },
      {
        path: '/normBuyer',
        component: () =>
          import( /* webpackChunkName: "normBuyer" */ '../pages/supplyChain/purchaseManage/normBuyer/normBuyer'),
        meta: {
          title: '标准采购列表'
        }
      },
      {
        path: '/formNormBuyer',
        component: () =>
          import( /* webpackChunkName: "normBuyer" */ '../pages/supplyChain/purchaseManage/normBuyer/formNormBuyer'),
        meta: {
          title: '标准采购'
        }
      },
      {
        path: '/requestPayout',
        component: () =>
          import( /* webpackChunkName: "requestPayout" */ '../pages/finance/copeManage/requestPayout/requestPayout'),
        meta: {
          title: '请款列表'
        }
      },
      {
        path: '/formPayout',
        component: () =>
          import( /* webpackChunkName: "requestPayout" */ '../pages/finance/copeManage/requestPayout/formPayout'),
        meta: {
          title: '请款'
        }
      },
      {
        path: '/salesOrder',
        component: () =>
          import( /* webpackChunkName: "salesOrder" */ '../pages/afterSale/repairBusines/salesOrder/salesOrder'),
        meta: {
          title: '网销订单'
        }
      },
      {
        path: '/salesOrder-add',
        component: () =>
          import( /* webpackChunkName: "salesOrder-add" */ '../pages/afterSale/repairBusines/salesOrder/salesOrder-add'),
        meta: {
          title: '网销订单-新增'
        }
      },
      {
        path: '/salesOrder-edit',
        component: () =>
          import( /* webpackChunkName: "salesOrder-add" */ '../pages/afterSale/repairBusines/salesOrder/salesOrder-add'),
        meta: {
          title: '网销订单-编辑'
        }
      },
      {
        path: '/ditchOrder',
        component: () =>
          import( /* webpackChunkName: "ditchOrder" */ '../pages/afterSale/repairBusines/ditchOrder/ditchOrder'),
        meta: {
          title: '渠道订单'
        }
      },
      {
        path: '/ditchOrder-add',
        component: () =>
          import( /* webpackChunkName: "ditchOrder" */ '../pages/afterSale/repairBusines/ditchOrder/ditchOrder-add'),
        meta: {
          title: '渠道订单-新增'
        }
      },
      {
        path: '/ditchOrder-edit',
        component: () =>
          import( /* webpackChunkName: "ditchOrder" */ '../pages/afterSale/repairBusines/ditchOrder/ditchOrder-add'),
        meta: {
          title: '渠道订单-编辑'
        }
      },
      {
        path: '/repertoryQuery',
        component: () =>
          import( /* webpackChunkName: "repertoryQuery" */ '../pages/supplyChain/inventoryManage/repertoryQuery/repertoryQuery'),
        meta: {
          title: '库存查询'
        }
      },
      {
        path: '/issueOrder',
        component: () =>
          import( /* webpackChunkName: "issueOrder" */ '../pages/afterSale/repairBusines/issueOrder/issueOrder'),
        meta: {
          title: '客诉发料单'
        }
      },
      {
        path: '/issueOrder-add',
        component: () =>
          import( /* webpackChunkName: "issueOrder" */ '../pages/afterSale/repairBusines/issueOrder/issueOrder-add'),
        meta: {
          title: '客诉发料单-新增'
        }
      },
      {
        path: '/issueOrder-edit',
        component: () =>
          import( /* webpackChunkName: "issueOrder" */ '../pages/afterSale/repairBusines/issueOrder/issueOrder-add'),
        meta: {
          title: '客诉发料单-编辑'
        }
      },
      {
        path: '/salesReturns',
        component: () =>
          import( /* webpackChunkName: "salesReturns" */ '../pages/afterSale/repairBusines/salesReturns/salesReturns'),
        meta: {
          title: '网销退货'
        }
      },
      {
        path: '/salesReturns-add',
        component: () =>
          import( /* webpackChunkName: "salesReturns" */ '../pages/afterSale/repairBusines/salesReturns/salesReturns-add'),
        meta: {
          title: '网销退货-新增'
        }
      },
      {
        path: '/salesReturns-edit',
        component: () =>
          import( /* webpackChunkName: "salesReturns" */ '../pages/afterSale/repairBusines/salesReturns/salesReturns-add'),
        meta: {
          title: '网销退货-编辑'
        }
      },
      {
        path: '/salesOrderVery',
        component: () =>
          import( /* webpackChunkName: "salesOrderVery" */ '../pages/afterSale/repairBusines/salesOrderVery/salesOrderVery'),
        meta: {
          title: '网销订单特批'
        }
      },
      {
        path: '/issueOrderVery',
        component: () =>
          import( /* webpackChunkName: "issueOrderVery" */ '../pages/afterSale/repairBusines/issueOrderVery/issueOrderVery'),
        meta: {
          title: '客诉发料特批'
        }
      },
      {
        path: '/salesCmmodity',
        component: () =>
          import( /* webpackChunkName: "salesCmmodity" */ '../pages/afterSale/repairBusines/salesCmmodity/salesCmmodity'),
        meta: {
          title: '网销商品'
        }
      },
      {
        path: '/salesCmmodity-add',
        component: () =>
          import( /* webpackChunkName: "salesCmmodity" */ '../pages/afterSale/repairBusines/salesCmmodity/salesCmmodity-add'),
        meta: {
          title: '网销商品-新增'
        }
      },
      {
        path: '/salesCmmodity-edit',
        component: () =>
          import( /* webpackChunkName: "salesCmmodity" */ '../pages/afterSale/repairBusines/salesCmmodity/salesCmmodity-add'),
        meta: {
          title: '网销商品-编辑'
        }
      },
      {
        path: '/cmmodityTrade',
        component: () =>
          import( /* webpackChunkName: "cmmodityTrade" */ '../pages/afterSale/repairBusines/cmmodityTrade/cmmodityTrade'),
        meta: {
          title: '商品退换'
        }
      },
      {
        path: '/delayOrder',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repairBusines/delayOrder/delayOrder'),
        meta: {
          title: '延迟订单'
        }
      },
      {
        path: '/repairQuery',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/serveFacility/repairQuery/repairQuery'),
        meta: {
          title: '保修查询'
        }
      },
      {
        path: '/repairWorkOrder',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/serveFacility/serveFacility/repairWorkOrder'),
        meta: {
          title: '维修工单列表'
        }
      },
      {
        path: '/formRepairWorkOrder',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/serveFacility/serveFacility/formRepairWorkOrder'),
        meta: {
          title: '维修工单'
        }
      },
      {
        path: '/receivingTask',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/receivingTask/receivingTask'),
        meta: {
          title: '收货任务'
        }
      },
      {
        path: '/receiptConfirmation',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/receivingTask/receiptConfirmation'),
        meta: {
          title: '收货确认'
        }
      },
      {
        path: '/receivingTest',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/receivingTest/receivingTest'),
        meta: {
          title: '收货检验'
        }
      },
      {
        path: '/qualityTest',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/receivingTest/qualityTest'),
        meta: {
          title: '质检判定'
        }
      },
      {
        path: '/storageList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/storageList/storageList'),
        meta: {
          title: '入库单列表'
        }
      },
      {
        path: '/storage',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/storageList/storage'),
        meta: {
          title: '入库单'
        }
      },
      {
        path: '/shipmentsTask',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/shipmentsTask/shipmentsTask'),
        meta: {
          title: '发货任务'
        }
      },
      {
        path: '/pickingList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/pickingList/pickingList'),
        meta: {
          title: '拣货单'
        }
      },
      {
        path: '/pickingTask',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/pickingList/pickingTask'),
        meta: {
          title: '拣货确认'
        }
      },
      {
        path: '/dispatchList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/dispatchList/dispatchList'),
        meta: {
          title: '发货单列表'
        }
      },
      {
        path: '/invoice',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/dispatchList/invoice'),
        meta: {
          title: '发货单'
        }
      },
      {
        path: '/pickScanning',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/dispatchList/pickScanning'),
        meta: {
          title: '拣货扫描'
        }
      },
      {
        path: '/logisticsDeploy',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/logisticsDeploy/logisticsDeploy'),
        meta: {
          title: '物流配置列表'
        }
      },
      {
        path: '/logisticsForm',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/logisticsDeploy/logisticsForm'),
        meta: {
          title: '物流配置'
        }
      },
      {
        path: '/InventoryTo',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/InventoryTo/InventoryTo'),
        meta: {
          title: '库存地列表'
        }
      },
      {
        path: '/inventoryLocation',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/InventoryTo/inventoryLocation'),
        meta: {
          title: '库存地'
        }
      },
      {
        path: '/repeQuery',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/repeQuery/repeQuery'),
        meta: {
          title: '库存查询'
        }
      },
      {
        path: '/campOnQuery',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/supplyChain/inventoryManage/campOnQuery/campOnQuery'),
        meta: {
          title: '预占查询'
        }
      },
      {
        path: '/preoccupation',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/supplyChain/inventoryManage/campOnQuery/preoccupation'),
        meta: {
          title: '预占记录'
        }
      },
      {
        path: '/itemRecord',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/itemRecord/itemRecord'),
        meta: {
          title: '出库清单'
        }
      },
      {
        path: '/orderDetail',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/itemRecord/orderDetail'),
        meta: {
          title: '出货单明细'
        }
      },
      {
        path: '/inventoryList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/inventoryList/inventoryList'),
        meta: {
          title: '入库清单'
        }
      },
      {
        path: '/entryDetail',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/inventoryList/entryDetail'),
        meta: {
          title: '入库明细'
        }
      },
      {
        path: '/allotOrder',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/allotOrder/allotOrder'),
        meta: {
          title: '调拨订单列表'
        }
      },
      {
        path: '/transferOrder',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/allotOrder/transferOrder'),
        meta: {
          title: '调拨订单'
        }
      },
      {
        path: '/elseShipment',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/elseShipment/elseShipment'),
        meta: {
          title: '其他出库列表'
        }
      },
      {
        path: '/otherDelivery',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/elseShipment/otherDelivery'),
        meta: {
          title: '其他出库'
        }
      },
      {
        path: '/elseIrikura',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/elseIrikura/elseIrikura'),
        meta: {
          title: '其他入库列表'
        }
      },
      {
        path: '/otherWarehousing',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/elseIrikura/otherWarehousing'),
        meta: {
          title: '其他入库'
        }
      },
      {
        path: '/inventoryFlow',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/sharding/inventoryFlow/inventoryFlow'),
        meta: {
          title: '库存流水'
        }
      },
      {
        path: '/orderPayable',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/orderPayable/orderPayable'),
        meta: {
          title: '应付单'
        }
      },
      {
        path: '/orderPayable-add',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/orderPayable/orderPayable-add'),
        meta: {
          title: '应付单-新增'
        }
      },
      {
        path: '/orderPayable-edit',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/orderPayable/orderPayable-add'),
        meta: {
          title: '应付单-编辑'
        }
      },
      {
        path: '/requestPayoutConfirm',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/requestPayoutConfirm/requestPayoutConfirm'),
        meta: {
          title: '请款确认'
        }
      },
      {
        path: '/requestPayoutConfirm-add',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/requestPayoutConfirm/requestPayoutConfirm-add'),
        meta: {
          title: '请款确认-新增'
        }
      },
      {
        path: '/requestPayoutConfirm-edit',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/requestPayoutConfirm/requestPayoutConfirm-add'),
        meta: {
          title: '请款确认-编辑'
        }
      },
      {
        path: '/paymentBill',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/paymentBill/paymentBill'),
        meta: {
          title: '付款单'
        }
      },
      {
        path: '/paymentBill-add',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/paymentBill/paymentBill-add'),
        meta: {
          title: '付款单-新增'
        }
      },
      {
        path: '/paymentBill-edit',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/paymentBill/paymentBill-add'),
        meta: {
          title: '付款单-编辑'
        }
      },
      {
        path: '/writeOffPayable',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/writeOffPayable/writeOffPayable'),
        meta: {
          title: '应付核销'
        }
      },
      {
        path: '/writeOffPayable-add',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/writeOffPayable/writeOffPayable-add'),
        meta: {
          title: '应付核销-新增'
        }
      },
      {
        path: '/writeOffPayable-edit',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/writeOffPayable/writeOffPayable-add'),
        meta: {
          title: '应付核销-编辑'
        }
      },
      {
        path: '/handleLedger',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repairBusines/handleLedger/handleLedger'),
        meta: {
          title: '应付台账'
        }
      },
      {
        path: '/handleOvueList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/handleOvueList/handleOvueList'),
        meta: {
          title: '应付余额表'
        }
      },
      {
        path: '/checkList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/checkList/checkList'),
        meta: {
          title: '应收单'
        }
      },
      {
        path: '/checkList-add',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/checkList/checkList-add'),
        meta: {
          title: '应收单-新增'
        }
      },
      {
        path: '/checkList-edit',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/checkList/checkList-add'),
        meta: {
          title: '应收单-编辑'
        }
      },
      {
        path: '/receipt',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/copeManage/receipt/receipt'),
        meta: {
          title: '收款单（应收管理）'
        }
      },
      {
        path: '/capital',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repairBusines/capital/capital'),
        meta: {
          title: '收款单（资金管理）'
        }
      },
      {
        path: '/receivable',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repairBusines/receivable/receivable'),
        meta: {
          title: '应收台账'
        }
      },
      {
        path: '/difference',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/difference/difference'),
        meta: {
          title: '应收余额查询'
        }
      },
      {
        path: '/ticket',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repairBusines/ticket/ticket'),
        meta: {
          title: '开票清单列表'
        }
      },
      {
        path: '/formTicket',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repairBusines/ticket/formTicket'),
        meta: {
          title: '开票清单'
        }
      },
      {
        path: '/lossGain',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/lossGain/lossGain'),
        meta: {
          title: '汇兑损益列表'
        }
      },
      {
        path: '/formLossGain',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/lossGain/formLossGain'),
        meta: {
          title: '汇兑损益'
        }
      },
      {
        path: '/ticketBalance',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/ticketBalance/ticketBalance'),
        meta: {
          title: '发票结算'
        }
      },
      {
        path: '/checkingList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/finance/receivable/checkingList/checkingList'),
        meta: {
          title: '应收对账单'
        }
      },
      {
        path: '/detailList',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/detailList/detailList'),
        meta: {
          title: '明细账(金额)'
        }
      },
      {
        path: '/costAdjust',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/costAdjust/costAdjust'),
        meta: {
          title: '成本调整列表'
        }
      },
      {
        path: '/formCostAdjust',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/costAdjust/formCostAdjust'),
        meta: {
          title: '成本调整'
        }
      },
      {
        path: '/modalShift',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/supplyChain/inventoryManage/modalShift/modalShift'),
        meta: {
          title: '形态转换列表'
        }
      },
      {
        path: '/formModalShift',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/supplyChain/inventoryManage/modalShift/formModalShift'),
        meta: {
          title: '形态转换'
        }
      },
      {
        path: '/repertoryGL',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/repertoryGL/repertoryGL'),
        meta: {
          title: '总账库存'
        }
      },
      {
        path: '/client',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/client/client'),
        meta: {
          title: '客户列表'
        }
      },
      {
        path: '/clientForm',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/client/clientForm'),
        meta: {
          title: '客户'
        }
      },
      {
        path: '/customerStatus',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/client/customerStatus'),
        meta: {
          title: '客户状况'
        }
      },
      {
        path: '/supplier',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/supplier/supplier'),
        meta: {
          title: '供应商列表'
        }
      },
      {
        path: '/supplierForm',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/supplier/supplierForm'),
        meta: {
          title: '供应商'
        }
      },
      {
        path: '/supplierState',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/supplier/supplierState'),
        meta: {
          title: '供应商状况'
        }
      },
      {
        path: '/nationArea',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/nationArea'),
        meta: {
          title: '国家/地区列表'
        }
      },
      {
        path: '/formNationArea',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/nationArea/formNationArea'),
        meta: {
          title: '国家/地区'
        }
      },
      {
        path: '/openPort',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/openPort'),
        meta: {
          title: '港口列表'
        }
      },
      {
        path: '/formOprnPort',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/openPort/formOprnPort'),
        meta: {
          title: '港口'
        }
      },
      {
        path: '/province',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/province'),
        meta: {
          title: '省/自治区列表'
        }
      },
      {
        path: '/formProvince',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/province/formProvince'),
        meta: {
          title: '省/自治区-'
        }
      },
      {
        path: '/city',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/city'),
        meta: {
          title: '城市列表'
        }
      },
      {
        path: '/formCity',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/city/formCity'),
        meta: {
          title: '城市'
        }
      },
      {
        path: '/county',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/county'),
        meta: {
          title: '区县列表'
        }
      },
      {
        path: '/formCounty',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/county/formCounty'),
        meta: {
          title: '区县'
        }
      },
      {
        path: '/postalCode',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/postalCode'),
        meta: {
          title: '邮编列表'
        }
      },
      {
        path: '/formPostalCode',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/postalCode/formPostalCode'),
        meta: {
          title: '邮政编码'
        }
      },
      {
        path: '/address',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/address'),
        meta: {
          title: '地址列表'
        }
      },
      {
        path: '/formAddress',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/address/formAddress'),
        meta: {
          title: '地址'
        }
      },
      {
        path: '/region',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/region'),
        meta: {
          title: '地区'
        }
      },
      {
        path: '/formRegion',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/address/region/formRegion'),
        meta: {
          title: '地区'
        }
      },
      {
        path: '/material',
        component: () =>
          import( /* webpackChunkName: "material" */ '../pages/basicManage/materialGoods/material'),
        meta: {
          title: '料品列表'
        }
      },
      {
        path: '/formMaterial',
        component: () =>
          import( /* webpackChunkName: "material" */ '../pages/basicManage/materialGoods/formMaterial'),
        meta: {
          title: '料品'
        }
      },
      {
        path: '/amountState',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/basicManage/materialGoods/amountState'),
        meta: {
          title: '料品数量状况'
        }
      },
      {
        path: '/color',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/color'),
        meta: {
          title: '颜色列表'
        }
      },
      {
        path: '/formColor',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/color/formColor'),
        meta: {
          title: '颜色'
        }
      },
      {
        path: '/bigClass',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/bigClass'),
        meta: {
          title: '大类列表'
        }
      },
      {
        path: '/formBigClass',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/bigClass/formBigClass'),
        meta: {
          title: '大类'
        }
      },
      {
        path: '/smallClass',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/smallClass'),
        meta: {
          title: '小类列表'
        }
      },
      {
        path: '/formSmallClass',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/smallClass/formSmallClass'),
        meta: {
          title: '小类'
        }
      },
      {
        path: '/materialGoods',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/materialGoods'),
        meta: {
          title: '料品列表'
        }
      },
      {
        path: '/formMaterialGoods',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/materialGoods/formMaterialGoods'),
        meta: {
          title: '料品'
        }
      },
      {
        path: '/materialGoodsCost',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/materialGoodsCost'),
        meta: {
          title: '料品成本列表'
        }
      },
      {
        path: '/formMaterialGoodsCost',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/fileBasic/feedInfo/materialGoodsCost/formMaterialGoodsCost'),
        meta: {
          title: '料品成本'
        }
      },
      {
        path: '/ledger',
        component: () =>
          import( /* webpackChunkName: "delayOrder" */ '../pages/afterSale/repertory/ledger/ledger'),
        meta: {
          title: '台账(金额)'
        }
      },
      {
        path: '/404',
        component: () =>
          import( /* webpackChunkName: "404" */ '../pages/404.vue'),
        meta: {
          title: '404'
        }
      },
      {
        path: '/403',
        component: () =>
          import( /* webpackChunkName: "403" */ '../pages/403.vue'),
        meta: {
          title: '403'
        }
      },
    ]
  },
  {
    path: '/login',
    component: () =>
      import( /* webpackChunkName: "login" */ '../pages/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
  ]
});