import { useState } from 'react';
import './App.css';
import { useRecorder } from './hooks/useRecorder';

import { eventWithTime } from '@rrweb/types';
import { TopBar } from './components/Layout/TopBar';
import { Footer } from './components/Layout/Footer';
import { ReplaySection } from './components/Replay/ReplaySection';

function App() {
    const [events, setEvents] = useState<eventWithTime[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isRecording, startRecording, stopRecording, events: recordedEvents } = useRecorder();

    const handleStopRecording = () => {
        stopRecording();
        setEvents(recordedEvents);
    };

    const handleStartRecording = () => {
        setEvents([]);
        startRecording();
    }



    return (
        <div className="app-root">
            <TopBar />

            <main className="main-content">
                <div className="content-container">
                    <section className="card section-record">
                        <div className="section-header">
                            <h2>1. 录制区域</h2>
                            <p className="subtitle">在下方交互区域进行操作，并在完成后点击停止。</p>
                        </div>

                        <div className="controls-bar">
                            {!isRecording ? (
                                <button className="btn btn-primary btn-lg" onClick={handleStartRecording}>
                                    <span className="icon">🔴</span> 开始录制
                                </button>
                            ) : (
                                <button className="btn btn-danger btn-lg" onClick={handleStopRecording}>
                                    <span className="icon">⏹️</span> 停止录制
                                </button>
                            )}
                            <div className={`status-badge ${isRecording ? 'recording' : ''}`}>
                                {isRecording ? '正在录制中...' : `已捕获事件: ${events.length}`}
                            </div>
                        </div>

                        <div className="interaction-area">
                            <div className="interaction-header">
                                <h3>交互测试区</h3>
                            </div>
                            <div className="form-group">
                                <input type="text" className="input-field" placeholder="在此输入文字..." />
                            </div>
                            <div className="action-row">
                                <button className="btn btn-secondary" onClick={() => setIsModalOpen(true)}>点击测试</button>
                                <div className="hover-target">悬停测试</div>
                            </div>
                        </div>
                    </section>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>测试弹窗</h3>
                                </div>
                                <div className="modal-body">
                                    <p>这是一个模态对话框，用于测试录制弹窗交互。</p>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>关闭</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {events.length > 0 && (
                        <ReplaySection events={events} />
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
