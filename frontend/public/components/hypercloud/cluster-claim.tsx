import * as _ from 'lodash-es';
import * as React from 'react';
import * as classNames from 'classnames';
import { sortable } from '@patternfly/react-table';

import { K8sResourceKind } from '../../module/k8s';
import { DetailsPage, ListPage, Table, TableRow, TableData, RowFunction } from '../factory';
import { Kebab, KebabAction, detailsPage, Timestamp, navFactory, ResourceKebab, ResourceLink, ResourceIcon, ResourceSummary, SectionHeading } from '../utils';
import { Status } from '@console/shared';
import { ClusterClaimModel } from '../../models';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

export const menuActions: KebabAction[] = [...Kebab.getExtensionsActionsForKind(ClusterClaimModel), ...Kebab.factory.common, Kebab.factory.ModifyStatus];

const kind = ClusterClaimModel.kind;

const tableColumnClasses = [
  '',
  '',
  classNames('pf-m-hidden', 'pf-m-visible-on-sm', 'pf-u-w-16-on-lg'),
  classNames('pf-m-hidden', 'pf-m-visible-on-lg'),
  classNames('pf-m-hidden', 'pf-m-visible-on-lg'),
  Kebab.columnClass
];

const ClusterClaimTableHeader = (t?: TFunction) => {
  return [
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_1'),
      sortField: 'metadata.name',
      transforms: [sortable],
      props: { className: tableColumnClasses[0] },
    },
    {
      title: t('COMMON:MSG_LNB_MENU_84'),
      sortFunc: 'spec.clusterName',
      transforms: [sortable],
      props: { className: tableColumnClasses[1] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_3'),
      sortField: 'status.phase',
      transforms: [sortable],
      props: { className: tableColumnClasses[2] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_57'),
      sortField: 'metadata.annotations.creator',
      transforms: [sortable],
      props: { className: tableColumnClasses[3] },
    },
    {
      title: t('COMMON:MSG_MAIN_TABLEHEADER_12'),
      sortField: 'metadata.creationTimestamp',
      transforms: [sortable],
      props: { className: tableColumnClasses[4] },
    },
    {
      title: '',
      props: { className: tableColumnClasses[5] },
    },
  ];
};
ClusterClaimTableHeader.displayName = 'ClusterClaimTableHeader';

const ClusterClaimTableRow: RowFunction<K8sResourceKind> = ({ obj: clusterClaim, index, key, style }) => {
  return (
    <TableRow id={clusterClaim.metadata.uid} index={index} trKey={key} style={style}>
      <TableData className={tableColumnClasses[0]}>
        <ResourceLink kind={kind} name={clusterClaim.metadata.name} namespace={clusterClaim.metadata.namespace} title={clusterClaim.metadata.uid} />
      </TableData>
      <TableData className={tableColumnClasses[1]}>
        {clusterClaim.spec.clusterName}
      </TableData>
      <TableData className={classNames(tableColumnClasses[2], 'co-break-word')}>
        <Status status={clusterClaim.status.phase} />
      </TableData>
      <TableData className={tableColumnClasses[3]}>
        {clusterClaim.metadata.annotations.creator}
      </TableData>
      <TableData className={tableColumnClasses[4]}>
        <Timestamp timestamp={clusterClaim.metadata.creationTimestamp} />
      </TableData>
      <TableData className={tableColumnClasses[5]}>
        <ResourceKebab actions={menuActions} kind={kind} resource={clusterClaim} />
      </TableData>
    </TableRow>
  );
};

export const ClusterRow: React.FC<ClusterRowProps> = ({ pod }) => {
  return (
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5">
        <ResourceIcon kind={kind} />
        {pod.metadata.name}
      </div>
      <div className="col-lg-2 col-md-3 col-sm-5 col-xs-7">
        <ResourceLink kind="Cluster" name={pod.spec.placement.clusters[0].name} />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-3 hidden-xs">
        <Status status={pod.status.phase} />
      </div>
      <div className="col-lg-2 hidden-md hidden-sm hidden-xs">
        <Timestamp timestamp={pod.metadata.creationTimestamp} />
      </div>
    </div>
  );
};

const ClusterClaimDetails: React.FC<ClusterClaimDetailsProps> = ({ obj: clusterClaim }) => (
  <>
    <div className="co-m-pane__body">
      <SectionHeading text="Cluster Claim Details" />
      <div className="row">
        <div className="col-lg-6">
          <ResourceSummary resource={clusterClaim} />
        </div>
      </div>
    </div>
  </>
);

const { details, editYaml } = navFactory;
export const ClusterClaims: React.FC = props => {
  const { t } = useTranslation();
  return <Table {...props} aria-label="Cluster Claims" Header={ClusterClaimTableHeader.bind(null, t)} Row={ClusterClaimTableRow} virtualize />;
}

export const ClusterClaimsPage: React.FC<ClusterClaimsPageProps> = props => <ListPage canCreate={true} ListComponent={ClusterClaims} kind={kind} {...props} />;

export const ClusterClaimsDetailsPage: React.FC<ClusterClaimsDetailsPageProps> = props => <DetailsPage {...props} kind={kind} menuActions={menuActions} pages={[details(detailsPage(ClusterClaimDetails)), editYaml()]} />;


type ClusterRowProps = {
  pod: K8sResourceKind;
}

type ClusterClaimDetailsProps = {
  obj: K8sResourceKind;
};

type ClusterClaimsPageProps = {
  showTitle?: boolean;
  namespace?: string;
  selector?: any;
};

type ClusterClaimsDetailsPageProps = {
  match: any;
};
