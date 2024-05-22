import React, { useState } from 'react';
import { Table, Modal } from 'antd';
import data from '../data/data.json';

interface Job {
  year: number;
  totalJobs: number;
  averageSalary: number;
}

const columns = [
  { title: 'Year', dataIndex: 'year', key: 'year', sorter: (a: Job, b: Job) => a.year - b.year },
  { title: 'Total Jobs', dataIndex: 'totalJobs', key: 'totalJobs', sorter: (a: Job, b: Job) => a.totalJobs - b.totalJobs },
  { title: 'Average Salary (USD)', dataIndex: 'averageSalary', key: 'averageSalary', sorter: (a: Job, b: Job) => a.averageSalary - b.averageSalary }
];

const jobData: { [year: number]: { title: string; count: number; }[] } = {
  2020: [{ title: 'ML Engineer', count: 500 }, { title: 'Data Scientist', count: 500 }],
  2021: [{ title: 'ML Engineer', count: 700 }, { title: 'Data Scientist', count: 500 }],
  2022: [{ title: 'ML Engineer', count: 900 }, { title: 'Data Scientist', count: 600 }],
  2023: [{ title: 'ML Engineer', count: 1000 }, { title: 'Data Scientist', count: 700 }],
  2024: [{ title: 'ML Engineer', count: 1200 }, { title: 'Data Scientist', count: 800 }]
};

const MainTable: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleRowClick = (record: Job) => {
    setSelectedYear(record.year);
  };

  const secondaryColumns = [
    { title: 'Job Title', dataIndex: 'title', key: 'title' },
    { title: 'Count', dataIndex: 'count', key: 'count' }
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} rowKey="year" onRow={(record: Job) => ({ onClick: () => handleRowClick(record) })} />
      <Modal
        title={`Jobs for ${selectedYear}`}
        visible={!!selectedYear}
        onCancel={() => setSelectedYear(null)}
        footer={null}
      >
        <Table columns={secondaryColumns} dataSource={selectedYear ? jobData[selectedYear] : []} rowKey="title" />
      </Modal>
    </>
  );
};

export default MainTable;
