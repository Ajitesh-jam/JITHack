// Copyright 2022-2024 Niantic.

#if UNITY_EDITOR

using System;
using Niantic.Lightship.AR.Meshing;
using Niantic.Lightship.AR.Semantics;
using Niantic.Lightship.AR.Subsystems.Meshing;
using Unity.XR.CoreUtils;
using UnityEditor;
using UnityEngine;
using UnityEngine.XR.ARFoundation;

namespace Niantic.Lightship.AR.Editor
{
    [CustomEditor(typeof(LightshipMeshingExtension))]
    internal class LightshipMeshingExtensionEditor : UnityEditor.Editor
    {
        private SerializedProperty _targetFrameRate;
        private SerializedProperty _fuseKeyframesOnly;

        private SerializedProperty _maximumIntegrationDistance;
        private SerializedProperty _voxelSize;
        private SerializedProperty _enableDistanceBasedVolumetricCleanup;

        private SerializedProperty _meshBlockSize;
        private SerializedProperty _meshCullingDistance;
        private SerializedProperty _enableMeshDecimation;

        private SerializedProperty _isMeshFilteringEnabled;
        private SerializedProperty _isFilteringAllowListEnabled;
        private SerializedProperty _filteringAllowList;
        private SerializedProperty _isFilteringBlockListEnabled;
        private SerializedProperty _filteringBlockList;

        private static class Contents
        {
            public static readonly string meshBlockSizeWarning =
                "For best results, the mesh block size should be an exact multiple of the voxel size.";

            public static readonly string noSemanticSegmentationManagerWarning =
                "There must be an active ARSemanticSegmentationManager in the scene to enable mesh filtering.";
        }

        private bool _triedLookingForSemanticsManager = false;
        private ARSemanticSegmentationManager _segmentationManager = null;

        private bool _triedLookingForMainCamera = false;
        private Camera _mainCamera = null;

        public override void OnInspectorGUI()
        {
            serializedObject.Update();

            EditorGUILayout.PropertyField(_targetFrameRate);
            EditorGUILayout.PropertyField(_fuseKeyframesOnly);

            EditorGUILayout.PropertyField(_maximumIntegrationDistance);
            if (_mainCamera == null && !_triedLookingForMainCamera)
            {
                _triedLookingForMainCamera = true;
                _mainCamera = Camera.main;
            }

            if (_mainCamera != null)
            {
                if (_maximumIntegrationDistance.floatValue > _mainCamera.farClipPlane)
                {
                    EditorGUILayout.HelpBox(
                        "The maximum integration distance is currently higher than the main camera's far clipping plane. Mesh beyond the far clipping plane will not be rendered.",
                        MessageType.Warning);
                }
            }

            EditorGUILayout.PropertyField(_voxelSize);
            EditorGUILayout.PropertyField(_enableDistanceBasedVolumetricCleanup);

            EditorGUILayout.PropertyField(_meshBlockSize);
            const float tolerance = 0.0001f;
            if (Math.Abs(_meshBlockSize.floatValue - Mathf.Round(_meshBlockSize.floatValue / _voxelSize.floatValue) * _voxelSize.floatValue) > tolerance)
            {
                EditorGUILayout.HelpBox(Contents.meshBlockSizeWarning, MessageType.Warning);
            }

            EditorGUILayout.PropertyField(_meshCullingDistance);
            EditorGUILayout.PropertyField(_enableMeshDecimation);

            EditorGUILayout.PropertyField(_isMeshFilteringEnabled);
            if (_isMeshFilteringEnabled.boolValue)
            {
                // If we haven't tried autofinding the segmentation manager yet, try it now.
                if (_segmentationManager == null && !_triedLookingForSemanticsManager)
                {
                    _triedLookingForSemanticsManager = true;
                    _segmentationManager = FindObjectOfType<ARSemanticSegmentationManager>();
                }

                if (_segmentationManager == null || !_segmentationManager.isActiveAndEnabled)
                {
                    EditorGUILayout.HelpBox(Contents.noSemanticSegmentationManagerWarning, MessageType.Error);
                }
                else
                {
                    EditorGUI.indentLevel++;
                    EditorGUILayout.PropertyField(_isFilteringAllowListEnabled);
                    if (_isFilteringAllowListEnabled.boolValue)
                    {
                        EditorGUI.indentLevel++;
                        EditorGUILayout.PropertyField(_filteringAllowList);
                        EditorGUI.indentLevel--;
                    }

                    EditorGUILayout.PropertyField(_isFilteringBlockListEnabled);
                    if (_isFilteringBlockListEnabled.boolValue)
                    {
                        EditorGUI.indentLevel++;
                        EditorGUILayout.PropertyField(_filteringBlockList);
                        EditorGUI.indentLevel--;
                    }
                    EditorGUI.indentLevel--;
                }
            }

            serializedObject.ApplyModifiedProperties();
        }

        private void OnEnable()
        {
            _targetFrameRate = serializedObject.FindProperty("_targetFrameRate");
            _fuseKeyframesOnly = serializedObject.FindProperty("_fuseKeyframesOnly");
            _maximumIntegrationDistance = serializedObject.FindProperty("_maximumIntegrationDistance");
            _voxelSize = serializedObject.FindProperty("_voxelSize");
            _enableDistanceBasedVolumetricCleanup = serializedObject.FindProperty("_enableDistanceBasedVolumetricCleanup");
            _meshBlockSize = serializedObject.FindProperty("_meshBlockSize");
            _meshCullingDistance = serializedObject.FindProperty("_meshCullingDistance");
            _enableMeshDecimation = serializedObject.FindProperty("_enableMeshDecimation");
            _isMeshFilteringEnabled = serializedObject.FindProperty("_isMeshFilteringEnabled");
            _isFilteringAllowListEnabled = serializedObject.FindProperty("_isFilteringAllowListEnabled");
            _filteringAllowList = serializedObject.FindProperty("_allowList");
            _isFilteringBlockListEnabled = serializedObject.FindProperty("_isFilteringBlockListEnabled");
            _filteringBlockList = serializedObject.FindProperty("_blockList");
        }
    }
}
#endif // UNITY_EDITOR
