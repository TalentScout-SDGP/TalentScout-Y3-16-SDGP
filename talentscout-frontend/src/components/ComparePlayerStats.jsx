import React from 'react';
import {Tabs} from 'flowbite-react';

function ComparePlayerStats() {
    return (
        <div className="font-poppins">
            <div className="md:container my-12">
                <div className="flex justify-center items-center">
                    <Tabs aria-label="Pills" style="pills">
                        <Tabs.Item active title="Test">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
                        </Tabs.Item>
                        <Tabs.Item title="ODI">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
                        </Tabs.Item>
                        <Tabs.Item title="T20">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default ComparePlayerStats;



