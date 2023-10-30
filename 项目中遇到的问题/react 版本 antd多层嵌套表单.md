

```ts

import { Button, Form, Input, Select, Row, Col, DatePicker, message, Spin, Radio, Checkbox, Space } from "antd";
import dayjs from "dayjs";
import { PlusOutlined } from "@ant-design/icons";
import type { RangePickerProps } from "antd/es/date-picker";
import TextArea from "antd/es/input/TextArea";

import { useEffect, useState } from "react";


const Index = () => {

	const [form] = Form.useForm();


	return (
		<div className="addTenant card">
			<Form
				form={form}
				onValuesChange={onFormLayoutChange}
				initialValues={{
					tenantPrincipals: [
						{
							name: "",
							phone: "",
							position: ""
						}
					]
				}}
				name="dynamic_form_complex"
				labelCol={{
					span: 100,
					offset: 1
				}}
				onFinish={onFinish}
				autoComplete="off"
			>
		
		


				{/* 单选题板块 */}
				<div>
					<Form.List name="singleArr">
						{(fields, { add, remove }) => (
							<>
								{fields.map((field, index) => (
									<Row key={field.key}>
										<h6 className="questionName">题号{index + 1}</h6>
										<Col span={24}>
											<Form.Item
												{...field}
												rules={[{ required: true, message: "请输入题干" }]}
												label="题干："
												name={[field.name, "stem"]}
											>
												<Input.TextArea placeholder="请输入题干" maxLength={200} showCount />
											</Form.Item>
										</Col>
										<Col span={24}>
											<Form.List name={[field.name, "options"]}>
												{(fieldsInside, { add: addInside, remove: removeInside }) => (
													<div>
														{fieldsInside.map(({ key, name, ...restFieldInside }, index) => (
															<div key={key}>
																<Row>
																	<Space>
																		<div className="addExamPageQsTitle">选项 {index + 1}</div>

																		<Form.Item
																			{...restFieldInside}
																			name={[name, "isAnswer"]}
																			label={"选项是否正确"}
																			rules={[{ required: true, message: "请选择选项是否正确" }]}
																		>
																			<Select className="addExamPageSelect" placeholder="请选择选项是否正确" value={false}>
																				<Select.Option value={true}>正确</Select.Option>
																				<Select.Option value={false}>错误</Select.Option>
																			</Select>
																		</Form.Item>
																		<Form.Item
																			{...restFieldInside}
																			name={[name, "text"]}
																			label={"选项内容"}
																			rules={[{ required: true, message: "请输入文案" }]}
																		>
																			<Input placeholder="请输入选项" maxLength={200} />
																		</Form.Item>

																		{(!form.getFieldValue("singleArr")[field.name]?.options?.length ||
																			form.getFieldValue("singleArr")[field.name]?.options?.length > 1) && (
																			<div>
																				<Button
																					danger
																					size="small"
																					className="addExamPageQsDel"
																					onClick={() => removeInside(name)}
																				>
																					删除
																				</Button>
																			</div>
																		)}
																	</Space>
																</Row>
															</div>
														))}

														<div>
															<Button onClick={() => addInside()}>新增选项</Button>
														</div>
													</div>
												)}
											</Form.List>
										</Col>
										
										<div>
											<Button onClick={() => remove(index)} danger>
												删除
											</Button>
										</div>
									</Row>
								))}
								<Row>
									<Col span={24}>
										<Form.Item>
											<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
												添加单选
											</Button>
										</Form.Item>
									</Col>
								</Row>
							</>
						)}
					</Form.List>
				</div>
			
			

				<Form.Item>
					<Row>
						<div className="btn-box">
							<Button type="primary" htmlType="submit">
								确认提交
							</Button>
							<Button className="cancel-btn" onClick={goBack}>
								取消
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