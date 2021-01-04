export const pluralToKind = new Map([
  ['pods', { kind: 'Pod', type: 'VanilaObject' }],
  ['deployments', { kind: 'Deployment', type: 'VanilaObject' }],
  ['replicasets', { kind: 'ReplicaSet', type: 'VanilaObject' }],
  ['horizontalpodautoscalers', { kind: 'HorizontalPodAutoscaler', type: 'VanilaObject' }],
  ['daemonsets', { kind: 'DaemonSet', type: 'VanilaObject' }],
  ['statefulsets', { kind: 'StatefulSet', type: 'VanilaObject' }],
  ['configmaps', { kind: 'ConfigMap', type: 'VanilaObject' }],
  ['secrets', { kind: 'Secret', type: 'VanilaObject' }],
  ['jobs', { kind: 'Job', type: 'VanilaObject' }],
  ['cronjobs', { kind: 'CronJob', type: 'VanilaObject' }],
  ['services', { kind: 'Service', type: 'VanilaObject' }],
  ['ingresses', { kind: 'Ingress', type: 'VanilaObject' }],
  ['networkpolicies', { kind: 'NetworkPolicy', type: 'VanilaObject' }],
  ['storageclasses', { kind: 'StorageClass', type: 'VanilaObject' }],
  ['persistentvolumeclaims', { kind: 'PersistentVolumeClaim', type: 'VanilaObject' }],
  ['persistentvolumes', { kind: 'PersistentVolume', type: 'VanilaObject' }],
  ['namespaces', { kind: 'Namespace', type: 'VanilaObject' }],
  ['limitranges', { kind: 'LimitRange', type: 'VanilaObject' }],
  ['resourcequotas', { kind: 'ResourceQuota', type: 'VanilaObject' }],
  ['roles', { kind: 'Role', type: 'VanilaObject' }],
  ['rolebindings', { kind: 'RoleBinding', type: 'VanilaObject' }],
  ['serviceaccounts', { kind: 'ServiceAccount', type: 'VanilaObject' }],
  ['namespaceclaims', { kind: 'NamespaceClaim', type: 'CustomResourceDefinition' }],
  ['servicebrokers', { kind: 'ServiceBroker', type: 'CustomResourceDefinition' }],
  ['serviceclasses', { kind: 'ServiceClass', type: 'CustomResourceDefinition' }],
  ['serviceplans', { kind: 'ServicePlan', type: 'CustomResourceDefinition' }],
  ['clusterservicebrokers', { kind: 'ClusterServiceBroker', type: 'CustomResourceDefinition' }],
  ['clusterserviceclasses', { kind: 'ClusterServiceClass', type: 'CustomResourceDefinition' }],
  ['clusterserviceplans', { kind: 'ClusterServicePlan', type: 'CustomResourceDefinition' }],
  ['clustertemplates', { kind: 'ClusterTemplate', type: 'CustomResourceDefinition' }],
  ['serviceinstances', { kind: 'ServiceInstance', type: 'CustomResourceDefinition' }],
  ['servicebindings', { kind: 'ServiceBinding', type: 'CustomResourceDefinition' }],
  ['catalogserviceclaims', { kind: 'CatalogServiceClaim', type: 'CustomResourceDefinition' }],
  ['templates', { kind: 'Template', type: 'CustomResourceDefinition' }],
  ['templateinstances', { kind: 'TemplateInstance', type: 'CustomResourceDefinition' }],
  ['rolebindingclaims', { kind: 'RoleBindingClaim', type: 'CustomResourceDefinition' }],
  ['resourcequotaclaims', { kind: 'ResourceQuotaClaim', type: 'CustomResourceDefinition' }],
  ['tasks', { kind: 'Task', type: 'CustomResourceDefinition' }],
  ['taskruns', { kind: 'TaskRun', type: 'CustomResourceDefinition' }],
  ['pipelines', { kind: 'Pipeline', type: 'CustomResourceDefinition' }],
  ['pipelineruns', { kind: 'PipelineRun', type: 'CustomResourceDefinition' }],
  ['approvals', { kind: 'Approval', type: 'CustomResourceDefinition' }],
  ['pipelineresources', { kind: 'PipelineResource', type: 'CustomResourceDefinition' }],
  ['hyperclusterresources', { kind: 'HyperClusterResource', type: 'CustomResourceDefinition' }],
  ['federatedconfigmaps', { kind: 'FederatedConfigMap', type: 'CustomResourceDefinition' }],
  ['federateddeployments', { kind: 'FederatedDeployment', type: 'CustomResourceDefinition' }],
  ['federatedingresses', { kind: 'FederatedIngress', type: 'CustomResourceDefinition' }],
  ['federatedjobs', { kind: 'FederatedJob', type: 'CustomResourceDefinition' }],
  ['federatednamespaces', { kind: 'FederatedNamespace', type: 'CustomResourceDefinition' }],
  ['federatedreplicasets', { kind: 'FederatedReplicaSet', type: 'CustomResourceDefinition' }],
  ['federatedsecrets', { kind: 'FederatedSecret', type: 'CustomResourceDefinition' }],
  ['federatedpods', { kind: 'FederatedPod', type: 'CustomResourceDefinition' }],
  ['federatedhorizontalpodautoscalers', { kind: 'FederatedHorizontalPodAutoscaler', type: 'CustomResourceDefinition' }],
  ['federateddaemonsets', { kind: 'FederatedDaemonSet', type: 'CustomResourceDefinition' }],
  ['federatedstatefulsets', { kind: 'FederatedStatefulSet', type: 'CustomResourceDefinition' }],
  ['federatedcronjobs', { kind: 'FederatedCronJob', type: 'CustomResourceDefinition' }],
  ['virtualservices', { kind: 'VirtualService', type: 'CustomResourceDefinition' }],
  ['destinationrules', { kind: 'DestinationRule', type: 'CustomResourceDefinition' }],
  ['envoyfilters', { kind: 'EnvoyFilter', type: 'CustomResourceDefinition' }],
  ['gateways', { kind: 'Gateway', type: 'CustomResourceDefinition' }],
  ['sidecars', { kind: 'Sidecar', type: 'CustomResourceDefinition' }],
  ['serviceentries', { kind: 'ServiceEntry', type: 'CustomResourceDefinition' }],
  ['requestauthentications', { kind: 'RequestAuthentication', type: 'CustomResourceDefinition' }],
  ['peerauthentications', { kind: 'PeerAuthentication', type: 'CustomResourceDefinition' }],
  ['authorizationpolicies', { kind: 'AuthorizationPolicy', type: 'CustomResourceDefinition' }],
  ['datavolumes', { kind: 'DataVolume', type: 'CustomResourceDefinition' }],
  ['virtualmachines', { kind: 'VirtualMachine', type: 'CustomResourceDefinition' }],
  ['registries', { kind: 'Registry', type: 'CustomResourceDefinition' }],
  ['imagesigners', { kind: 'ImageSigner', type: 'CustomResourceDefinition' }],
  ['imagesignrequests', { kind: 'ImageSignRequest', type: 'CustomResourceDefinition' }]
]);
