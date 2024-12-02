# select 搜索下拉

```tsx
import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  message,
  Spin,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import {
  getAlphaOfficeList,
  tenantCreate,
  tenantInfo,
  tenantUpdate,
  treeList,
} from "@/api/modules/tenant";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { Tenant } from "@/api/interface";

import "./index.less";
let total = 20;
const pageSize = 20;
const Index = () => {
  const [officeList, setOfficeList] = useState<Tenant.officeListItem[]>([]);
  const [countNum, setCountNum] = useState("0");
  const [loading, setLoading] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchString, setSearchString] = useState("");
  const [officeName, setOfficeName] = useState("");
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    await tenantCreate({
      ...values,
    });
  };

  const getOfficeList = async () => {
    setLoading(true);
    setShowBottom(false);
    try {
      const { data } = await getAlphaOfficeList({
        key: searchString,
        pageNo: currentPage,
        pageSize: pageSize,
      });
      if (!data || data?.entities.length == 0) return;
      let arr = [...officeList, ...data.entities];
      setOfficeList(arr);
      // setTotal(data.total);
      total = data.total;
      setLoading(false);
      if (arr.length == data.total) {
        setShowBottom(true);
      }
    } catch (err) {
      setLoading(false);
    }
  };
  const handleScroll = (e: any) => {
    const target = e.target as HTMLElement;
    if (pageSize * (currentPage - 1) > total || loading) {
      return;
    }
    if (target.scrollTop + target.offsetHeight >= target.scrollHeight) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  // type 判断是否是数据回现展示，回现的搜索直接展示即可，其他时候搜索需搜索滞空
  const handleChangeText = (e: string, type = false) => {
    setSearchString(e);
    setOfficeList([]);
    setCurrentPage(1);
    setOfficeName("");
    !type &&
      form.setFieldsValue({
        alphaOfficeId: null,
      });
  };
  const onSearch = debounce(handleChangeText, 800);
  const onChangeOfficeList = (e: any, evt: any) => {
    if (!evt?.data) {
      setOfficeName("");
      form.setFieldsValue({
        alphaOfficeId: null,
      });
      setOfficeList([]);
    } else {
      setOfficeName(evt?.data);
    }
  };
  useEffect(() => {
    if (pageSize * (currentPage - 1) > total) {
      setShowBottom(true);
      return;
    }
    // 有搜索文案或没到最后一页才进行搜索
    if (searchString) {
      getOfficeList();
    }
  }, [currentPage, searchString]);
  document.onkeydown = function (event: any) {
    let target, code, tag;
    console.log(111);
    if (!event) {
      event = window.event; //针对ie浏览器
      target = event.srcElement;
      code = event.keyCode;
      if (code == 13) {
        return false;
      }
    } else {
      target = event.target; //针对遵循w3c标准的浏览器，如Firefox
      code = event.keyCode;
      if (code == 13) {
        return false;
      }
    }
  };
  return (
    <div className="addTenant card">
      <Form
        form={form}
        initialValues={{
          tenantPrincipals: [
            {
              name: "",
              phone: "",
              position: "",
            },
          ],
        }}
        name="dynamic_form_complex"
        labelCol={{
          span: 100,
          offset: 1,
        }}
        onFinish={onFinish}
        autoComplete="off">
        <Row>
          <Col span={8}>
            <Form.Item name="alphaOfficeId" label="Alpha律所名称：">
              <Select
                placeholder="请输搜索后选择"
                showSearch
                allowClear
                onSearch={onSearch}
                onChange={onChangeOfficeList}
                onInputKeyDown={(e) => {
                  if (e.key === "Enter") {
                    return false;
                  }
                }}
                filterOption={false}
                onPopupScroll={handleScroll}>
                {officeList?.map((item) => {
                  return (
                    <Select.Option
                      key={item.alphaOfficeId}
                      value={item.alphaOfficeId}
                      data={item?.officeName}>
                      {item.officeName}
                    </Select.Option>
                  );
                })}
                {loading ? (
                  <Select.Option className="arriveBottom" value={-1}>
                    <Spin size="small" />
                  </Select.Option>
                ) : null}
                {officeList?.length == 0 ? (
                  <Select.Option className="arriveBottom" value={-2}>
                    暂无搜索内容
                  </Select.Option>
                ) : null}
                {officeList?.length != 0 && showBottom ? (
                  <Select.Option className="arriveBottom" value={-3}>
                    到底了呦~
                  </Select.Option>
                ) : null}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="律所ID：" name="alphaOfficeId">
              <Input disabled maxLength={30} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Row>
            <div className="btn-box">
              <Button type="primary" htmlType="submit">
                确认提交
              </Button>
            </div>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
```
