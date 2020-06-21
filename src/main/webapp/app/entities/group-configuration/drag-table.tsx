/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { DndProvider, DragSource } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SortableTree, { removeNodeAtPath } from "react-sortable-tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { isNil, cloneDeep } from "lodash";
import DragContainer from "./drag-container";

type Props = {
  baseList?: Array<any>;
  configuredList?: Array<any>;
};

const externalNodeType = "yourNodeType";
const externalNodeSpec = {
  beginDrag: (componentProps) => ({ node: { ...componentProps.node } }),
};

const externalNodeCollect = (connect /* , monitor */) => ({
  connectDragSource: connect.dragSource(),
});

class externalNodeBaseComponent extends React.Component {
  render() {
    // @ts-ignore
    const { connectDragSource, node } = this.props;

    return connectDragSource(
      <div className="drag-item">
        <div className="drag-item-moveHandle" draggable="true">
          <FontAwesomeIcon icon={faArrowsAlt} />
        </div>
        <div className="drag-item-rowContents">
          <div className="rowLabel">
            <span className="rowTitle">{node.title}</span>
          </div>
        </div>
      </div>,
      {
        dropEffect: "copy",
      }
    );
  }
}

const AvailableNode = DragSource(
  externalNodeType,
  externalNodeSpec,
  externalNodeCollect
)(externalNodeBaseComponent);

const resetBaseConfigurations = (item, list, setBaseConfigurations) => {
  if (isNil(item)) return;
  const updatedList = list.filter((fItem) => fItem.id !== item.id);
  setBaseConfigurations(updatedList);
};

const addBaseConfigurations = (item, list, setBaseConfigurations) => {
  const updatedList = cloneDeep(list);
  updatedList.push(item);
  setBaseConfigurations(updatedList);
  if (item.children && item.children.length > 0) {
    item.children.forEach((fItem) =>
      addBaseConfigurations(fItem, updatedList, setBaseConfigurations)
    );
  }
};

const getNodeKey = ({ treeIndex }) => treeIndex;

const DragTable: React.FC<Props> = (props) => {
  const [basConfigurations, setBaseConfigurations] = useState([]);
  const [groupsConfigured, setGroupConfigurations] = useState([]);

  useEffect(() => {
    if (props.baseList.length !== 0) {
      setBaseConfigurations(props.baseList);
    }
  }, [props.baseList]);

  useEffect(() => {
    if (props.configuredList.length !== 0) {
      setGroupConfigurations(props.configuredList);
    }
  }, [props.configuredList]);

  return (
    <Row className="drag-table">
      <Col>
        <DndProvider backend={HTML5Backend}>
          <Row>
            <Col md="4">
              <DragContainer label="Available">
                {basConfigurations.map((item, i) => (
                  <React.Fragment key={i}>
                    {/*
                    // @ts-ignore */}
                    <AvailableNode node={{ id: item.id, title: item.title }} />
                  </React.Fragment>
                ))}
              </DragContainer>
            </Col>
            <Col>
              <DragContainer label="Configured">
                <div style={{ height: 500 }}>
                  <SortableTree
                    treeData={groupsConfigured}
                    onChange={(treeData) => setGroupConfigurations(treeData)}
                    dndType={externalNodeType}
                    onMoveNode={(args) =>
                      resetBaseConfigurations(
                        args && args.node,
                        basConfigurations,
                        setBaseConfigurations
                      )
                    }
                    generateNodeProps={({ node, path }) => ({
                      buttons: [
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={() => {
                            addBaseConfigurations(
                              node,
                              basConfigurations,
                              setBaseConfigurations
                            );
                            setGroupConfigurations(
                              removeNodeAtPath({
                                treeData: groupsConfigured,
                                path,
                                getNodeKey,
                              })
                            );
                          }}
                        />,
                      ],
                    })}
                  />
                </div>
              </DragContainer>
            </Col>
          </Row>
        </DndProvider>
      </Col>
    </Row>
  );
};

export default DragTable;
