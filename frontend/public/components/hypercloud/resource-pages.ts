import { Map as ImmutableMap } from 'immutable';
import { referenceForModel, GroupVersionKind } from '../../module/k8s';
import {
  ApprovalModel,
  NamespaceClaimModel,
  ResourceQuotaClaimModel,
  RoleBindingClaimModel,
  HyperClusterResourceModel,
  FederatedConfigMapModel,
  FederatedDeploymentModel,
  FederatedIngressModel,
  FederatedNamespaceModel,
  FederatedJobModel,
  FederatedReplicaSetModel,
  FederatedSecretModel,
  FederatedServiceModel,
  FederatedPodModel,
  FederatedHPAModel,
  FederatedDaemonSetModel,
  FederatedStatefulSetModel,
  FederatedCronJobModel,
  VirtualMachineModel,
  VirtualMachineInstanceModel,
  VirtualServiceModel,
  DestinationRuleModel,
  EnvoyFilterModel,
  GatewayModel,
  SidecarModel,
  ServiceEntryModel,
  RequestAuthenticationModel,
  PeerAuthenticationModel,
  AuthorizationPolicyModel,
  DataVolumeModel,
} from '../../models';

type ResourceMapKey = GroupVersionKind | string;
type ResourceMapValue = () => Promise<React.ComponentType<any>>;

export const hyperCloudDetailsPages = ImmutableMap<ResourceMapKey, ResourceMapValue>()
  .set(referenceForModel(ApprovalModel), () => import('./approval' /* webpackChunkName: "approval" */).then(m => m.ApprovalsDetailsPage))
  .set(referenceForModel(ResourceQuotaClaimModel), () => import('./resource-quota-claim' /* webpackChunkName: "resourcequotaclaim" */).then(m => m.ResourceQuotaClaimsDetailsPage))
  .set(referenceForModel(RoleBindingClaimModel), () => import('./role-binding-claim' /* webpackChunkName: "rolebindingclaim" */).then(m => m.RoleBindingClaimsDetailsPage))
  .set(referenceForModel(NamespaceClaimModel), () => import('./namespace-claim' /* webpackChunkName: "namespaceclaim" */).then(m => m.NamespaceClaimsDetailsPage))
  .set(referenceForModel(HyperClusterResourceModel), () => import('./cluster' /* webpackChunkName: "cluster" */).then(m => m.ClustersDetailsPage))
  .set(referenceForModel(FederatedConfigMapModel), () => import('./federated-config-map' /* webpackChunkName: "configmap" */).then(m => m.FederatedConfigMapsDetailsPage))
  .set(referenceForModel(FederatedDeploymentModel), () => import('./federated-deployment' /* webpackChunkName: "deployment" */).then(m => m.FederatedDeploymentsDetailsPage))
  .set(referenceForModel(FederatedIngressModel), () => import('./federated-ingress' /* webpackChunkName: "ingress" */).then(m => m.FederatedIngressesDetailsPage))
  .set(referenceForModel(FederatedNamespaceModel), () => import('./federated-namespace' /* webpackChunkName: "namespace" */).then(m => m.FederatedNamespacesDetailsPage))
  .set(referenceForModel(FederatedJobModel), () => import('./federated-job' /* webpackChunkName: "job" */).then(m => m.FederatedJobsDetailsPage))
  .set(referenceForModel(FederatedReplicaSetModel), () => import('./federated-replica-set' /* webpackChunkName: "replica-set" */).then(m => m.FederatedReplicaSetsDetailsPage))
  .set(referenceForModel(FederatedSecretModel), () => import('./federated-secret' /* webpackChunkName: "secret" */).then(m => m.FederatedSecretsDetailsPage))
  .set(referenceForModel(FederatedServiceModel), () => import('./federated-service' /* webpackChunkName: "service" */).then(m => m.FederatedServicesDetailsPage))
  .set(referenceForModel(FederatedPodModel), () => import('./federated-pod' /* webpackChunkName: "pod" */).then(m => m.FederatedPodsDetailsPage))
  .set(referenceForModel(FederatedHPAModel), () => import('./federated-horizontalpodautoscaler' /* webpackChunkName: "horizontalpodautoscaler" */).then(m => m.FederatedHPAsDetailsPage))
  .set(referenceForModel(FederatedDaemonSetModel), () => import('./federated-daemonset' /* webpackChunkName: "daemonset" */).then(m => m.FederatedDaemonSetsDetailsPage))
  .set(referenceForModel(FederatedStatefulSetModel), () => import('./federated-statefulset' /* webpackChunkName: "statefulset" */).then(m => m.FederatedStatefulSetsDetailsPage))
  .set(referenceForModel(FederatedCronJobModel), () => import('./federated-cronjob' /* webpackChunkName: "cronjob" */).then(m => m.FederatedCronJobsDetailsPage))
  .set(referenceForModel(VirtualMachineModel), () => import('./virtual-machine' /* webpackChunkName: "virtual-machine" */).then(m => m.VirtualMachinesDetailsPage))
  .set(referenceForModel(VirtualMachineInstanceModel), () => import('./virtual-machine-instance' /* webpackChunkName: "virtual-machine-instance" */).then(m => m.VirtualMachineInstancesDetailsPage))
  .set(referenceForModel(VirtualServiceModel), () => import('./virtual-service' /* webpackChunkName: "virtual-service" */).then(m => m.VirtualServicesDetailsPage))
  .set(referenceForModel(DestinationRuleModel), () => import('./destination-rule' /* webpackChunkName: "destination-rule" */).then(m => m.DestinationRulesDetailsPage))
  .set(referenceForModel(EnvoyFilterModel), () => import('./envoy-filter' /* webpackChunkName: "envoy-filter" */).then(m => m.EnvoyFiltersDetailsPage))
  .set(referenceForModel(GatewayModel), () => import('./gateway' /* webpackChunkName: "gateway" */).then(m => m.GatewaysDetailsPage))
  .set(referenceForModel(SidecarModel), () => import('./sidecar' /* webpackChunkName: "sidecar" */).then(m => m.SidecarsDetailsPage))
  .set(referenceForModel(ServiceEntryModel), () => import('./service-entry' /* webpackChunkName: "service-entry" */).then(m => m.ServiceEntriesDetailsPage))
  .set(referenceForModel(RequestAuthenticationModel), () => import('./request-authentication' /* webpackChunkName: "request-authentication" */).then(m => m.RequestAuthenticationsDetailsPage))
  .set(referenceForModel(PeerAuthenticationModel), () => import('./peer-authentication' /* webpackChunkName: "peer-authentication" */).then(m => m.PeerAuthenticationsDetailsPage))
  .set(referenceForModel(AuthorizationPolicyModel), () => import('./authentication-policy' /* webpackChunkName: "authentication-policy" */).then(m => m.AuthorizationPoliciesDetailsPage))
  .set(referenceForModel(DataVolumeModel), () => import('./data-volume' /* webpackChunkName: "data-volume" */).then(m => m.DataVolumesDetailsPage));

export const hyperCloudListPages = ImmutableMap<ResourceMapKey, ResourceMapValue>()
  .set(referenceForModel(ApprovalModel), () => import('./approval' /* webpackChunkName: "approval" */).then(m => m.ApprovalsPage))
  .set(referenceForModel(HyperClusterResourceModel), () => import('./cluster' /* webpackChunkName: "cluster" */).then(m => m.ClustersPage))
  .set(referenceForModel(FederatedConfigMapModel), () => import('./federated-config-map' /* webpackChunkName: "configmap" */).then(m => m.FederatedConfigMapsPage))
  .set(referenceForModel(FederatedDeploymentModel), () => import('./federated-deployment' /* webpackChunkName: "deployment" */).then(m => m.FederatedDeploymentsPage))
  .set(referenceForModel(FederatedIngressModel), () => import('./federated-ingress' /* webpackChunkName: "ingress" */).then(m => m.FederatedIngressesPage))
  .set(referenceForModel(FederatedNamespaceModel), () => import('./federated-namespace' /* webpackChunkName: "namespace" */).then(m => m.FederatedNamespacesPage))
  .set(referenceForModel(FederatedJobModel), () => import('./federated-job' /* webpackChunkName: "job" */).then(m => m.FederatedJobsPage))
  .set(referenceForModel(FederatedReplicaSetModel), () => import('./federated-replica-set' /* webpackChunkName: "replica-set" */).then(m => m.FederatedReplicaSetsPage))
  .set(referenceForModel(FederatedSecretModel), () => import('./federated-secret' /* webpackChunkName: "secret" */).then(m => m.FederatedSecretsPage))
  .set(referenceForModel(FederatedServiceModel), () => import('./federated-service' /* webpackChunkName: "service" */).then(m => m.FederatedServicesPage))
  .set(referenceForModel(FederatedPodModel), () => import('./federated-pod' /* webpackChunkName: "pod" */).then(m => m.FederatedPodsPage))
  .set(referenceForModel(FederatedHPAModel), () => import('./federated-horizontalpodautoscaler' /* webpackChunkName: "horizontalpodautoscaler" */).then(m => m.FederatedHPAsPage))
  .set(referenceForModel(FederatedDaemonSetModel), () => import('./federated-daemonset' /* webpackChunkName: "daemonset" */).then(m => m.FederatedDaemonSetsPage))
  .set(referenceForModel(FederatedStatefulSetModel), () => import('./federated-statefulset' /* webpackChunkName: "statefulset" */).then(m => m.FederatedStatefulSetsPage))
  .set(referenceForModel(FederatedCronJobModel), () => import('./federated-cronjob' /* webpackChunkName: "cronjob" */).then(m => m.FederatedCronJobsPage))
  .set(referenceForModel(VirtualMachineModel), () => import('./virtual-machine' /* webpackChunkName: "virtual-machine" */).then(m => m.VirtualMachinesPage))
  .set(referenceForModel(VirtualMachineInstanceModel), () => import('./virtual-machine-instance' /* webpackChunkName: "virtual-machine-instance" */).then(m => m.VirtualMachineInstancesPage))
  .set(referenceForModel(VirtualServiceModel), () => import('./virtual-service' /* webpackChunkName: "virtual-service" */).then(m => m.VirtualServicesPage))
  .set(referenceForModel(DestinationRuleModel), () => import('./destination-rule' /* webpackChunkName: "destination-rule" */).then(m => m.DestinationRulesPage))
  .set(referenceForModel(EnvoyFilterModel), () => import('./envoy-filter' /* webpackChunkName: "envoy-filter" */).then(m => m.EnvoyFiltersPage))
  .set(referenceForModel(GatewayModel), () => import('./gateway' /* webpackChunkName: "gateway" */).then(m => m.GatewaysPage))
  .set(referenceForModel(SidecarModel), () => import('./sidecar' /* webpackChunkName: "sidecar" */).then(m => m.SidecarsPage))
  .set(referenceForModel(ServiceEntryModel), () => import('./service-entry' /* webpackChunkName: "service-entry" */).then(m => m.ServiceEntriesPage))
  .set(referenceForModel(RequestAuthenticationModel), () => import('./request-authentication' /* webpackChunkName: "request-authentication" */).then(m => m.RequestAuthenticationsPage))
  .set(referenceForModel(PeerAuthenticationModel), () => import('./peer-authentication' /* webpackChunkName: "peer-authentication" */).then(m => m.PeerAuthenticationsPage))
  .set(referenceForModel(AuthorizationPolicyModel), () => import('./authentication-policy' /* webpackChunkName: "authentication-policy" */).then(m => m.AuthorizationPoliciesPage))
  .set(referenceForModel(DataVolumeModel), () => import('./data-volume' /* webpackChunkName: "data-volume" */).then(m => m.DataVolumesPage))
  .set(referenceForModel(ApprovalModel), () => import('./approval' /* webpackChunkName: "approval" */).then(m => m.ApprovalsPage))
  .set(referenceForModel(ResourceQuotaClaimModel), () => import('./resource-quota-claim' /* webpackChunkName: "resourcequotaclaim" */).then(m => m.ResourceQuotaClaimsPage))
  .set(referenceForModel(RoleBindingClaimModel), () => import('./role-binding-claim' /* webpackChunkName: "rolebindingclaim" */).then(m => m.RoleBindingClaimsPage))
  .set(referenceForModel(NamespaceClaimModel), () => import('./namespace-claim' /* webpackChunkName: "namespaceclaim" */).then(m => m.NamespaceClaimsPage));
