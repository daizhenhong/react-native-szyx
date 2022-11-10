/*************************************************************************************************
 * <pre>
 * @包路径：
 * @版权所有： 北京数字医信科技有限公司 (C) 2019
 *
 * @类描述:
 * @版本:       V3.2.0
 * @作者        daizhenhong
 * @创建时间    2019/9/18 3:31 PM
 *
 * @修改记录：
 -----------------------------------------------------------------------------------------------
 ----------- 时间      |   修改人    |     修改的方法       |         修改描述   ---------------
 -----------------------------------------------------------------------------------------------
 </pre>
 ************************************************************************************************/
import {BaseVModel} from '../../../base/BaseVModel';
import {ExampleModel} from '../model/ExampleModel';
import exampleList from '../res/exampleList'


export class ExampleVModel extends BaseVModel{
    constructor(){
        super(new ExampleModel())

        this.initList()
    }


    initList(){
        super.initList(exampleList,'uniqueId')
    }
}