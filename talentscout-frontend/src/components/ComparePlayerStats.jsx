import {Tabs} from 'flowbite-react';

function ComparePlayerStats() {
    return (
        <div className="font-poppins">
            <div className="md:container my-12">
                <div className="compare-tabs flex justify-center items-center">
                    <Tabs className="flex justify-center items-center" aria-label="Pills" style="pills">
                        <Tabs.Item active title="Test">
                            <p>Content 1</p>
                        </Tabs.Item>
                        <Tabs.Item title="ODI">
                            <p>Content 2</p>
                        </Tabs.Item>
                        <Tabs.Item title="T20">
                            <p>Content 3</p>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default ComparePlayerStats;
