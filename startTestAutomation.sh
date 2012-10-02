rm -r testOutputDir
mkdir testOutputDir
bash phantomServer.sh start
sleep 2
bash runJasmineTests.sh
bash phantomServer.sh stop
