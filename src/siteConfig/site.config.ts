import { FaChartLine } from 'react-icons/fa';

const DevApp = {
    SD_Telecom: "90f795fe-a343-4495-9777-c0dbbbcdb6d0",
    SD_SLA: "88cd55cd-8635-462f-9f03-1da902b36a58",
    Ticket: "0751c732-cea3-4bf8-84ec-fde4b9efa4ff",
    Incident: "6a5020b8-6558-455b-9b32-6efd07f37c46",
    Request: "b923929e-b055-4162-a4e4-27f5932d1516",
    ContactAudit: "59a4b27c-803c-44bc-b0cc-45060f33c15e",
    MDS: "807cedb1-740a-4137-8cf0-85e28ab4e7c9",
    userApp: "2c764c83-1b1e-4fe0-8446-d191e085570e",
    PrescriptiveApp: "db4d02ba-d0d4-4989-aea5-eeb7475f28f2",
};

export default {
    mainTitle: "Command Center",
    productTitle: "Service Desk",
    help: {
        redirectUrl:
            "https://nttdatagroup.sharepoint.com/teams/srvs-ics-analyticsandperformancemanagement/_layouts/15/embed.aspx?UniqueId=e8fb9837-4e0b-4828-919f-3bd72a319ef1&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=OneUpFileViewer&referrerScenario=EmbedDialog.Create",
    },
    content: {
        pages: [
            {
                type: "category",
                label: "Prescriptive Insights",
                icon: FaChartLine,
                appId: DevApp.PrescriptiveApp,
                appHost: "QSC",
                subItems: [
                    {
                        type: "link",
                        appId: DevApp.PrescriptiveApp,
                        label: "Prescriptive Insights Action Tracker",
                        titleInfo: "",
                        overlayPage: true,
                        filters: {
                            commonFilters: [
                                {
                                    label: "Account",
                                    fieldname: "Account",
                                    field: "dropdown",
                                    placeholder: "Select Account",
                                },
                                {
                                    label: "MonthYear",
                                    fieldname: "MonthYear",
                                    field: "dropdown",
                                    placeholder: "Select MonthYear",
                                },
                            ],
                        },
                        criteria: ["Account", "MonthYear"],
                        allowMultipleSelection: true,
                        statusBarFilters: ["Account", "MonthYear", "POS_RFC_Key"],
                        disableMultiSelect: ["POS_RFC_Key"],
                        reloadInfo: {
                            expression:
                                "'Last Reload Date & Time: ' & '$(vReload)' & ' Data Refresh Rate 15 minutes'",
                        },
                        help: {
                            subTitle: "Prescriptive Insights",
                            redirectUrl:
                                "https://web.microsoftstream.com/video/99659649-7747-4e01-9382-455df95273b9?list=studio",
                            contact: "mailto:Nucleus_Production_Support@nttdata.com",
                            contactToolTip: "Query on POSvsActual - Prescriptive",
                            contactUs: {
                                mailId: "Nucleus_Production_Support@nttdata.com",
                                subject: "Query on POSvsActual - Prescriptive Insights",
                                body: "",
                            },
                        },
                        layout: {
                            ChartContainer: {
                                group: [
                                    {
                                        column: 1,
                                        type: "tabulator",
                                        title: "Prescriptive Insights Action Tracker",
                                        modalContent:
                                            "Please confirm Account, Monthyear, POS Selections",
                                        fromObjID: false,
                                        objectID: "KpVJ",
                                        toggle: false,
                                        rowHeight: 100,
                                        showUpload: true,
                                        info: "<b><u>INFORMATION:</u> Accounts with RFC, please update the feedback for all categories within POS, and for the AHT category within both POS and POS+RFC.</b>",
                                        qWidth: 10,
                                        qHeight: 500,
                                        tableColumns: [
                                            {
                                                column: "Account Name",
                                                dataColumn: "0",
                                                dataField: "Account",
                                                option: {
                                                    frozen: true,
                                                    width: 150,
                                                },
                                            },
                                            {
                                                column: "MonthYear",
                                                dataField: "MonthYear",
                                                dataColumn: 1,
                                                option: {
                                                    frozen: true,
                                                },
                                            },
                                            {
                                                column: "Prescriptive Category",
                                                dataField: "Prescriptive Category",
                                                dataColumn: 2,
                                                option: {
                                                    frozen: true,
                                                    width: 200,
                                                },
                                            },
                                            {
                                                column: "Prescriptive Insight",
                                                dataField: "Prescriptive Insight",
                                                dataColumn: 3,
                                                option: {
                                                    maxWidth: "600",
                                                    formatter: "textarea",
                                                },
                                            },
                                            {
                                                column: "UniqueID",
                                                dataField: "UniqueID",
                                                dataColumn: 4,
                                                option: {
                                                    visible: false,
                                                },
                                            },
                                            {
                                                column: "Prescriptive Actions Implemented",
                                                dataField: "Action",
                                                dataColumn: 7,
                                                key: "Actions",
                                                titleFormat: true,
                                                option: {
                                                    editor: "list",
                                                    editorParams: {
                                                        values: {
                                                            Yes: "Yes (Implemented)",
                                                            InProgress: "In Progress",
                                                            "N/A": "N/A",
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                column: "Comments / Actions",
                                                dataField: "Comments",
                                                titleFormat: true,
                                                dataColumn: 6,
                                                key: "Comment",
                                                option: {
                                                    editor: "input",
                                                },
                                            },
                                            {
                                                column: "Data Issue",
                                                dataField: "DataIssue",
                                                titleFormat: true,
                                                key: "Feedback",
                                                option: {
                                                    editor: "list",
                                                    editorParams: { values: { Yes: "Yes", No: "No" } },
                                                },
                                            },
                                            {
                                                column: "Incident Ticket Number",
                                                dataField: "Incident Ticket Number",
                                                titleFormat: true,
                                                key: "Ticket",
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                ],
            }
        ]
    }
}
