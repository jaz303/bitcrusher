MODULE			= bitcrusher
EXPORT 			= $(MODULE)
ENTRY			= index.js
SRC				= $(ENTRY)
BUILD_DIR 		= build
BUNDLE 			= $(BUILD_DIR)/$(MODULE).js
DEMO_BUNDLE 	= demo/bundle.js
DEMO_ENTRY 		= demo/main.js

.PHONY: all watch

all: $(BUNDLE) $(DEMO_BUNDLE)

clean:
	rm -f $(BUNDLE)
	rm -f $(DEMO_BUNDLE)

watch:
	watchify -o $(DEMO_BUNDLE) $(DEMO_ENTRY) &
	watchify -o $(BUNDLE) -s $(EXPORT) $(ENTRY) &

$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

$(BUNDLE): $(BUILD_DIR) $(SRC)
	browserify -s $(EXPORT) -o $(BUNDLE) $(ENTRY)

$(DEMO_BUNDLE): $(DEMO_ENTRY) $(SRC)
	browserify -o $(DEMO_BUNDLE) $(DEMO_ENTRY)

